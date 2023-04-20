# 🤖 GPT-Test-Prompt

GPT-Test-Prompt is a Node.js command-line tool that generates component-level test prompts for the 🧪@testing-library/react library. 

## Installation

To install GPT-Test-Prompt, run the following command:

```bash
npm install -g gpt-test-prompt
```

## Usage

To use GPT-Test-Prompt, navigate to the root of your project and run the following command:

```bash
getprompt
```

This will generate a list of test prompts for each component in your project.

## How It Works

GPT-Test-Prompt uses the Node.js file system module to traverse your project directory and locate all components. For each component, it generates a list of test prompts using the 🧪@testing-library/react library. 

The test prompts are output to the console and can be copy-pasted into your project's test files. 

## License

GPT-Test-Prompt is licensed under the MIT License. See LICENSE for more information.
