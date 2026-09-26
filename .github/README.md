# Simple Elevators - Localization

This repository is dedicated exclusively to the **localization** of the [**Simple Elevators**](https://www.curseforge.com/minecraft-bedrock/addons/simple-elevators) add-on for Minecraft Bedrock Edition.

Here, the community can contribute by adding or improving translations in their native language, without needing access to the add-on's source code.

---

## About this repository

This repository **does not contain the add-on's source code**. It only includes the text files required for multi-language support:

```
bp/
 └── texts/
      ├── en_US.lang
      ├── es_ES.lang
      ├── pt_BR.lang
      └── ...
rp/
 └── texts/
      ├── en_US.lang
      ├── es_ES.lang
      ├── pt_BR.lang
      └── ...
```

- **`bp/texts/**`\*\* — Behavior Pack strings
  - You can only add `pack.name` and `pack.description` here
- **`rp/texts/**`\*\* — Resource Pack strings
  - General translation keys:
    - **tile.\<block_id\>.name** — Block Names
    - **ajr:itemGroup.name.\<group\>** — Item Group Names
    - **script.\<error\|warn\|log\>.\<log_name\>** — Scripting Logs

> [!IMPORTANT]
> Copy scripting log keys from existing en_US or es_MX, those are original files provided by the original creator of the addon

Once translations are reviewed and approved, these folders are merged into the main add-on repository (private). This keeps the source code protected while giving the community the opportunity to contribute translations openly.

---

## Currently supported languages

|  Code   | Language              | Status              |
| :-----: | :-------------------- | :------------------ |
| `en_US` | English (US) (source) | Complete            |
| `es_ES` | Spanish (source)      | Complete            |
| `pt_BR` | Portuguese (BR)       | Needs native review |

> [!NOTE]
> **Needs native review** means a translation file already exists, but it was generated with machine translation (Google Translate) and has not been reviewed by a native speaker. If you speak this language fluently, your help would be especially valuable.
>
> Contributors who consistently deliver high-quality translations may be granted the **Verified Translator** role on our Discord server. This role is granted **in addition to** the **Contributor** role, not as a replacement. Consistent contributors may also be invited to join the staff team (along with its private Discord server) if they are interested. The Contributor role gives you access to a private channel, early previews of upcoming projects, and priority for beta testing.

If your language is not listed, you can add it yourself. Check the [contribution guide](./CONTRIBUTING.md) for details.

---

## Want to contribute?

Any help is welcome. Whether you want to **add a new language**, **fix existing translations**, or **improve wording**, your contribution is valuable.

Read the full guide here: **[CONTRIBUTING](./CONTRIBUTING.md)**

---

## License

The localization files contained in this repository are distributed under the **MIT** license. This means you are free to use, modify, and share them, as long as the corresponding copyright notice is preserved.

The **Simple Elevators** add-on as a whole (code, assets, and builds) is owned by its authors and is **not** distributed under this license.

---

## Links

- Add-on download: Simple Elevators at **[CurseForge](https://www.curseforge.com/minecraft-bedrock/addons/simple-elevators)**
- Report an issue: **[Issues](https://github.com/shell-studios/simple-elevator-localization/issues)**
- Discussions: **[Discussions](https://github.com/shell-studios/simple-elevator-localization/discussions)**

---

## Credits

Thanks to all translators who make it possible for Simple Elevators to reach more people around the world.

### Author

- **[@ajr-uribe](https://github.com/ajr-uribe)** — Add-on creator. Maintains the `es_MX` and `en_US` source strings.

### Featured Translators

| User | Language | Contribution |
|------|----------|--------------|
| *(pending native reviewers)* | | |

### Machine-Translated Languages

The following languages were generated with Google Translate as a starting point. They are functional but have not been reviewed by native speakers. See the [contribution guide](./CONTRIBUTING.md) if you want to help.

| User | Language | Notes |
|------|----------|-------|
| [@anonimous-person1224](https://github.com/anonimous-person1224) | All current languages except `es_MX` and `en_US` | Initial machine translation |