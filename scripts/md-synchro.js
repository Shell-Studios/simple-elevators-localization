import fs from 'node:fs';
import path from 'node:path';

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error(
    'Usage: node scripts/sync-markdown.js <origin> <destinies...> [tag]'
  );
  console.error(
    'Example (explicit tag): node scripts/sync-markdown.js docs/LANGS-TABLE.md README.md CONTRIBUTING.md LANGS-TABLE'
  );
  console.error(
    'Example (auto tag):     node scripts/sync-markdown.js docs/LANGS-TABLE.md README.md CONTRIBUTING.md'
  );
  process.exit(1);
}

const originFile = path.resolve(args[0]);
const originParsed = path.parse(originFile);

let targetFiles = [];
let tag = '';

// Check if the last argument should be treated as an explicit tag or a destination file path
const lastArg = args[args.length - 1];
const possibleFilePath = path.resolve(lastArg);

if (
  args.length > 2 &&
  !fs.existsSync(possibleFilePath) &&
  !lastArg.includes('/') &&
  !lastArg.includes('\\')
) {
  // Last argument is treated as an explicit tag name
  tag = lastArg;
  targetFiles = args
    .slice(1, -1)
    .map((filePath) => path.resolve(filePath));
} else {
  // Tag is omitted; infer tag name from origin filename (without extension)
  tag = originParsed.name;
  targetFiles = args
    .slice(1)
    .map((filePath) => path.resolve(filePath));
}

const marker = `<!--${tag}-->`;

/**
 * Extracts content between the specified tag occurrences from the origin file.
 */
function extractTaggedContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const firstIndex = content.indexOf(marker);
  const lastIndex = content.lastIndexOf(marker);

  if (
    firstIndex === -1 ||
    lastIndex === -1 ||
    firstIndex === lastIndex
  ) {
    throw new Error(
      `Matching pair of tags "${marker}" was not found in origin file: ${filePath}`
    );
  }

  return content.slice(firstIndex + marker.length, lastIndex);
}

/**
 * Replaces content between the tag occurrences in a target file with the new content.
 */
function updateTargetFile(filePath, newContent) {
  const content = fs.readFileSync(filePath, 'utf8');
  const firstIndex = content.indexOf(marker);
  const lastIndex = content.lastIndexOf(marker);

  if (
    firstIndex === -1 ||
    lastIndex === -1 ||
    firstIndex === lastIndex
  ) {
    console.warn(
      `[SKIPPED] Tags "${marker}" not found or invalid in: ${path.relative(process.cwd(), filePath)}`
    );
    return;
  }

  const before = content.slice(0, firstIndex + marker.length);
  const after = content.slice(lastIndex);

  const updatedContent = `${before}${newContent}${after}`;
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(
    `[UPDATED] ${path.relative(process.cwd(), filePath)}`
  );
}

function main() {
  try {
    if (!fs.existsSync(originFile)) {
      throw new Error(
        `Origin file does not exist: ${originFile}`
      );
    }

    const snippet = extractTaggedContent(originFile);

    for (const targetPath of targetFiles) {
      if (fs.existsSync(targetPath)) {
        updateTargetFile(targetPath, snippet);
      } else {
        console.warn(
          `[SKIPPED] File not found: ${path.relative(process.cwd(), targetPath)}`
        );
      }
    }
  } catch (error) {
    console.error(
      `Error syncing markdown files: ${error.message}`
    );
    process.exit(1);
  }
}

main();
