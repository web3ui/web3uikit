"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presetSchematic = exports.presetGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const library_1 = require("../library/library");
const insert_import_1 = require("../utils/insert-import");
const insert_statement_1 = require("../utils/insert-statement");
const presets_1 = require("../utils/presets");
const path_1 = require("path");
function presetGenerator(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        options = normalizeOptions(options);
        yield createPreset(tree, options);
        yield (0, devkit_1.formatFiles)(tree);
        return () => {
            (0, devkit_1.installPackagesTask)(tree);
        };
    });
}
exports.presetGenerator = presetGenerator;
exports.presetSchematic = (0, devkit_1.convertNxGenerator)(presetGenerator);
exports.default = presetGenerator;
function createPreset(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (options.preset === presets_1.Preset.Empty ||
            options.preset === presets_1.Preset.Apps ||
            options.preset === presets_1.Preset.TS) {
            return;
        }
        else if (options.preset === presets_1.Preset.Angular) {
            const { applicationGenerator: angularApplicationGenerator, } = require('@nrwl' + '/angular/generators');
            yield angularApplicationGenerator(tree, {
                name: options.name,
                style: options.style,
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            setDefaultCollection(tree, '@nrwl/angular');
        }
        else if (options.preset === presets_1.Preset.React) {
            const { applicationGenerator: reactApplicationGenerator, } = require('@nrwl' + '/react');
            yield reactApplicationGenerator(tree, {
                name: options.name,
                style: options.style,
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            setDefaultCollection(tree, '@nrwl/react');
        }
        else if (options.preset === presets_1.Preset.NextJs) {
            const { applicationGenerator: nextApplicationGenerator } = require('@nrwl' +
                '/next');
            yield nextApplicationGenerator(tree, {
                name: options.name,
                style: options.style,
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            setDefaultCollection(tree, '@nrwl/next');
        }
        else if (options.preset === presets_1.Preset.WebComponents) {
            const { applicationGenerator: webApplicationGenerator } = require('@nrwl' +
                '/web');
            yield webApplicationGenerator(tree, {
                name: options.name,
                style: options.style,
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            (0, devkit_1.addDependenciesToPackageJson)(tree, {}, {
                '@ungap/custom-elements': '0.1.6',
            });
            addPolyfills(tree, `apps/${(0, devkit_1.names)(options.name).fileName}/src/polyfills.ts`, ['@ungap/custom-elements']);
            setDefaultCollection(tree, '@nrwl/web');
        }
        else if (options.preset === presets_1.Preset.AngularWithNest) {
            const { applicationGenerator: angularApplicationGenerator, } = require('@nrwl' + '/angular/generators');
            const { applicationGenerator: nestApplicationGenerator } = require('@nrwl' +
                '/nest');
            yield angularApplicationGenerator(tree, {
                name: options.name,
                style: options.style,
                linter: options.linter,
                skipFormat: true,
                standaloneConfig: options.standaloneConfig,
            });
            yield nestApplicationGenerator(tree, {
                name: 'api',
                frontendProject: options.name,
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            yield (0, library_1.libraryGenerator)(tree, {
                name: 'api-interfaces',
                unitTestRunner: 'none',
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            setDefaultCollection(tree, '@nrwl/angular');
            connectAngularAndNest(tree, options);
        }
        else if (options.preset === presets_1.Preset.ReactWithExpress) {
            const { applicationGenerator: expressApplicationGenerator, } = require('@nrwl' + '/express');
            const { applicationGenerator: reactApplicationGenerator, } = require('@nrwl' + '/react');
            yield reactApplicationGenerator(tree, {
                name: options.name,
                style: options.style,
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            yield expressApplicationGenerator(tree, {
                name: 'api',
                frontendProject: options.name,
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            yield (0, library_1.libraryGenerator)(tree, {
                name: 'api-interfaces',
                unitTestRunner: 'none',
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            setDefaultCollection(tree, '@nrwl/react');
            connectReactAndExpress(tree, options);
        }
        else if (options.preset === presets_1.Preset.Nest) {
            const { applicationGenerator: nestApplicationGenerator } = require('@nrwl' +
                '/nest');
            yield nestApplicationGenerator(tree, {
                name: options.name,
                linter: options.linter,
            });
            setDefaultCollection(tree, '@nrwl/nest');
        }
        else if (options.preset === presets_1.Preset.Express) {
            const { applicationGenerator: expressApplicationGenerator, } = require('@nrwl' + '/express');
            yield expressApplicationGenerator(tree, {
                name: options.name,
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
            });
            setDefaultCollection(tree, '@nrwl/express');
        }
        else if (options.preset === 'react-native') {
            const { reactNativeApplicationGenerator } = require('@nrwl' +
                '/react-native');
            yield reactNativeApplicationGenerator(tree, {
                name: options.name,
                linter: options.linter,
                standaloneConfig: options.standaloneConfig,
                e2eTestRunner: 'detox',
            });
            setDefaultCollection(tree, '@nrwl/react-native');
        }
        else if (options.preset === presets_1.Preset.Core || options.preset === presets_1.Preset.NPM) {
            setupPackageManagerWorkspaces(tree, options);
            if (options.preset === presets_1.Preset.Core) {
                tree.delete('workspace.json');
            }
        }
        else {
            throw new Error(`Invalid preset ${options.preset}`);
        }
    });
}
function setupPackageManagerWorkspaces(tree, options) {
    if (options.packageManager === 'pnpm') {
        (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, './files/pnpm-workspace'), '.', {});
    }
    else {
        (0, devkit_1.updateJson)(tree, 'package.json', (json) => {
            json.workspaces = ['packages/**'];
            return json;
        });
    }
}
function connectAngularAndNest(host, options) {
    var _a;
    const { insertNgModuleImport } = require('@nrwl' +
        '/angular/src/generators/utils');
    host.write('libs/api-interfaces/src/lib/api-interfaces.ts', `export interface Message { message: string }`);
    const modulePath = `apps/${options.name}/src/app/app.module.ts`;
    (0, insert_import_1.insertImport)(host, modulePath, 'HttpClientModule', '@angular/common/http');
    insertNgModuleImport(host, modulePath, 'HttpClientModule');
    const scope = options.npmScope;
    const style = (_a = options.style) !== null && _a !== void 0 ? _a : 'css';
    host.write(`apps/${options.name}/src/app/app.component.ts`, `import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@${scope}/api-interfaces';

@Component({
  selector: '${scope}-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.${style}']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello')
  constructor(private http: HttpClient) {}
}
    `);
    host.write(`apps/${options.name}/src/app/app.component.spec.ts`, `import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
    `);
    host.write(`apps/${options.name}/src/app/app.component.html`, `<div style="text-align:center">
  <h1>Welcome to ${options.name}!</h1>
  <img
    width="450"
    src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
    alt="Nx - Smart, Fast and Extensible Build System"
  />
</div>
<div>Message: {{ (hello$|async)|json }}</div>
    `);
    host.write(`apps/api/src/app/app.controller.ts`, `import { Controller, Get } from '@nestjs/common';

import { Message } from '@${scope}/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
    `);
    host.write(`apps/api/src/app/app.service.ts`, `import { Injectable } from '@nestjs/common';
import { Message } from '@${scope}/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
    `);
}
function connectReactAndExpress(host, options) {
    const scope = options.npmScope;
    host.write('libs/api-interfaces/src/lib/api-interfaces.ts', `export interface Message { message: string }`);
    host.write(`apps/${options.name}/src/app/app.tsx`, `import React, { useEffect, useState } from 'react';
import { Message } from '@${scope}/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to ${options.name}!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
    `);
    host.write(`apps/${options.name}/src/app/app.spec.tsx`, `import { cleanup, getByText, render, waitFor } from '@testing-library/react';
import React from 'react';
import App from './app';

describe('App', () => {
  afterEach(() => {
    delete global['fetch'];
    cleanup();
  });

  it('should render successfully', async () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ({
        message: 'my message'
      })
    });

    const { baseElement } = render(<App />);
    await waitFor(() => getByText(baseElement, 'my message'));
  });
});
    `);
    host.write(`apps/api/src/main.ts`, `import * as express from 'express';
import { Message } from '@${scope}/api-interfaces';

const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
    `);
}
function setDefaultCollection(tree, defaultCollection) {
    const workspaceConfiguration = (0, devkit_1.readWorkspaceConfiguration)(tree);
    (0, devkit_1.updateWorkspaceConfiguration)(tree, Object.assign(Object.assign({}, workspaceConfiguration), { cli: Object.assign(Object.assign({}, (workspaceConfiguration.cli || {})), { defaultCollection }) }));
}
function addPolyfills(host, polyfillsPath, polyfills) {
    for (const polyfill of polyfills) {
        (0, insert_statement_1.insertStatement)(host, polyfillsPath, `import '${polyfill}';\n`);
    }
}
function normalizeOptions(options) {
    options.name = (0, devkit_1.names)(options.name).fileName;
    return options;
}
//# sourceMappingURL=preset.js.map