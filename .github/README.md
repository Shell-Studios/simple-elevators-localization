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

- **`bp/texts/**`** — Behavior Pack strings
  - You can only add `pack.name` and `pack.description` here
- **`rp/texts/**`** — Resource Pack strings
  - General translation keys:
    - **tile.\<block_id\>.name** — Block Names
    - **ajr:itemGroup.name.\<group\>** — Item Group Names
    - **script.\<error\|warn\|log\>.\<log_name\>** — Scripting Logs

> [!IMPORTANT]
> Copy scripting log keys from existing en_US or es_MX, those are original files provided by the original creator of the addon

Once translations are reviewed and approved, these folders are merged into the main add-on repository (private). This keeps the source code protected while giving the community the opportunity to contribute translations openly.

---

<!--LANGS-TABLE-->

# Language support

| Code    | Language              | Type             | Status  |
| ------- | --------------------- | ---------------- | ------- |
| `en_US` | English (US)          | Source           | Present |
| `es_MX` | Mexican Spanish       | Source           | Present |
| `en_GB` | English (UK)          | Regional variant | Present |
| `es_ES` | Spanish (Spain)       | Regional variant | Present |
| `tr_TR` | Turkish               | Target           | Present |
| `de_DE` | German                | Target           | MT      |
| `fr_FR` | French (France)       | Target           | MT      |
| `fr_CA` | French (Canada)       | Regional Variant | MT      |
| `it_IT` | Italian               | Target           | MT      |
| `pl_PL` | Polish                | Target           | MT      |
| `pt_BR` | Brazilian Portuguese  | Target           | MT      |
| `pt_PT` | Portuguese (Portugal) | Regional Variant | MT      |
| `ja_JP` | Japanese              | Target           | Missing |
| `ko_KR` | Korean                | Target           | Missing |
| `nl_NL` | Dutch                 | Target           | Missing |
| `ru_RU` | Russian               | Target           | Missing |
| `sv_SE` | Swedish               | Target           | Missing |
| `uk_UA` | Ukrainian             | Target           | Missing |
| `zh_CN` | Chinese (Simplified)  | Target           | Missing |
| `zh_TW` | Chinese (Traditional) | Target           | Missing |

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

<!--FEATURED-TRANSLATORS-->
### Featured Translators

| User                                             | Language          | Contribution              |
| ------------------------------------------------ | ----------------- | ------------------------- |
| [@TheKaplumbag](https://github.com/TheKaplumbag) | Turkish (`tr_TR`) | Added Turkish translation |

<!--FEATURED-TRANSLATORS-->

### Machine-Translated Languages

The following languages were generated with Google Translate as a starting point. They are functional but have not been reviewed by native speakers. See the [contribution guide](./CONTRIBUTING.md) if you want to help.

| User | Language | Notes |
|------|----------|-------|
| [@anonimous-person1224](https://github.com/anonimous-person1224) | All current languages except `es_MX` and `en_US` | Initial machine translation |