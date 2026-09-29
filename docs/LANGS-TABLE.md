
<!--
Maintainer note:

This file is the single source of truth for the language table below. It is
synced into README.md and CONTRIBUTING.md by scripts/sync-langs.js.

Do not edit the table or notes in README.md or CONTRIBUTING.md directly.
Edit them here instead, then run the sync script.
-->

<!--LANGS-TABLE-->
# Language support

| Code    | Language              | Type              | Status  |
|---------|-----------------------|-------------------|---------|
| `en_US` | English (US)          | Source            | Present |
| `es_MX` | Mexican Spanish       | Source            | Present |
| `en_GB` | English (UK)          | Regional variant  | Present |
| `es_ES` | Spanish (Spain)       | Regional variant  | Present |
| `tr_TR` | Turkish               | Target            | Present |
| `de_DE` | German                | Target            | MT      |
| `fr_FR` | French (France)       | Target            | MT      |
| `fr_CA` | French (Canada)       | Target            | MT      |
| `it_IT` | Italian               | Target            | MT      |
| `pl_PL` | Polish                | Target            | MT      |
| `pt_BR` | Brazilian Portuguese  | Target            | MT      |
| `pt_PT` | Portuguese (Portugal) | Target            | MT      |
| `ja_JP` | Japanese              | Target            | Missing |
| `ko_KR` | Korean                | Target            | Missing |
| `nl_NL` | Dutch                 | Target            | Missing |
| `ru_RU` | Russian               | Target            | Missing |
| `sv_SE` | Swedish               | Target            | Missing |
| `uk_UA` | Ukrainian             | Target            | Missing |
| `zh_CN` | Chinese (Simplified)  | Target            | Missing |
| `zh_TW` | Chinese (Traditional) | Target            | Missing |

**Status legend**

- **Present** — A translation exists and has been reviewed. Safe to use.
- **MT** — Machine-translated with Google Translate. Functional but pending review by a native speaker.
- **Missing** — No translation file exists yet. You can add it by following the contribution guide.

If your language is not listed here, check the [Bedrock OSS documentation](https://wiki.bedrock.dev/text/text-intro#vanilla-languages) for the correct code before opening a PR. Only vanilla language codes are accepted unless the language is registered with a custom `language_names.json`.

> [!NOTE]
> Some locales are close enough that duplicating a file is acceptable instead of writing it twice. This repository already does this for `en_US`/`en_GB`, `es_MX`/`es_ES`, and `pt_BR`/`pt_PT`.
>
> If you duplicate a peer language, another contributor can later adapt it to their region. For example, if you translate `pt_PT` and copy it to `pt_BR`, someone from Brazil can adjust `pt_BR` to match Brazilian usage.

> [!NOTE]
> Contributors who consistently deliver high-quality translations may be granted the **Verified Translator** role on our Discord server. This role is granted **in addition to** the **Contributor** role, not as a replacement. Consistent contributors may also be invited to join the staff team (along with its private Discord server) if they are interested. The Verified Translator role gives you access to a private channel, early previews of upcoming projects, and priority for beta testing.
<!--LANGS-TABLE-->