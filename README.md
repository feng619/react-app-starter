## Uses

- 確定你的電腦已經安裝 flow
```
brew install flow
```

- vscode 必須安裝以下插件
	- ESLint
	- Prettier-ESLint
	- Flow Language Support
	- Babel ES6/ES7

- vscode 的設定檔建議如下
```
{
  "editor.fontFamily": "Source Han Code JP, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 15,
  "editor.tabSize": 2,
  "editor.insertSpaces": false,
  "editor.detectIndentation": false,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Material Theme",
  "editor.formatOnSave": true,
  "flow.useNPMPackagedFlow": true,
  "javascript.validate.enable": false,
  "javascript.format.enable": true,
}
```

- 進入專案安裝套件
```
npm i
```

- 開始使用
```
npm run start
```
