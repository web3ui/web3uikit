import fs from "fs";
import path from "path";
import { describe, it, expect } from "vitest";
import { parse, ParserOptions } from "react-docgen-typescript/lib/parser.js";
import {
  generateDocgenCodeBlock,
  GeneratorOptions,
} from "../generateDocgenCodeBlock";

function getGeneratorOptions(parserOptions: ParserOptions = {}) {
  return (filename: string) => {
    const filePath = path.resolve(__dirname, "__fixtures__", filename);

    return {
      filename,
      source: fs.readFileSync(filePath, "utf8"),
      componentDocs: parse(filePath, parserOptions),
      docgenCollectionName: null,
      setDisplayName: true,
      typePropName: "type",
    } as GeneratorOptions;
  };
}

function loadFixtureTests(): GeneratorOptions[] {
  return fs
    .readdirSync(path.resolve(__dirname, "__fixtures__"))
    .map(getGeneratorOptions());
}

const fixtureTests: GeneratorOptions[] = loadFixtureTests();
const simpleFixture = fixtureTests.find(
  (f) => f.filename === "Simple.tsx"
) as GeneratorOptions;

describe("component fixture", () => {
  fixtureTests.forEach((generatorOptions) => {
    it(`${generatorOptions.filename} has code block generated`, () => {
      expect(generateDocgenCodeBlock(generatorOptions)).toMatchSnapshot();
    });
  });
});

it("adds component to docgen collection", () => {
  expect(
    generateDocgenCodeBlock({
      ...simpleFixture,
      docgenCollectionName: "STORYBOOK_REACT_CLASSES",
    })
  ).toMatchSnapshot();
});

it("generates value info for enums", () => {
  expect(
    generateDocgenCodeBlock(
      getGeneratorOptions({ shouldExtractLiteralValuesFromEnum: true })(
        "DefaultPropValue.tsx"
      )
    )
  ).toMatchSnapshot();
});
