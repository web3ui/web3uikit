# Web3UIKit

The web3uiKit is aimed at helping developers build web3 dApps fast, delivering a quality DX to our developers plus an inclusive and reliable UX to your end users.
Thank you for taking an interest in contributing to what we aim to be the industry standard in web3 UI/UX kits... we need your help.

&nbsp;

# Our core goals for this kit 📈

-   a fast and reliable kit that is easy to use for devs (**top DX**)
-   a friendly user experience that has great accessibility (**topUX**)
-   strict typed components to kill those bugs before they happen
-   building a community of front end mages who are passion about web3
-   finding our next FrontEnd master to join our expanding international team (that could be you)

&nbsp;

# About our stack

We have made a battle tested front end web3 stack for the roaring 20s

-   React JS: Industry standard, no need to say more
-   Typescript: strongly typed props and data means no bugs
-   Styled Components: Encapsulated CSS with all the power of SCSS & JS
-   Storybook: lets us build quickly in isolation and test props on the fly
-   RTL: React Test Library makes testing easy
-   Prettier makes our code look nice and helps with Pull Requests
-   Yarn is used to get reliable package management on Mac, PC & Lynx

&nbsp;

# Getting started

You want to get started? Follow these 3 simple steps

-   Clone the web3uiKit repo https://github.com/web3ui/web3uikit
-   Open a terminal window and `cd` to the project folder
-   Run `yarn install` you may need to install Yarn globally first
-   Make a new branch, see BRANCH NAMING
-   Run `yarn storybook` and there you go, ready to code?
-   Not sure where to start, lets look at `NewComp` we made it specially for you
-   Still stuck? Checkout the onboarding video (bottom of this page)

&nbsp;

# Got an idea for a component?

You can start coding right away but in order for us to organize the build, please follow these steps

1. Open an issue in our gitHub repo https://github.com/web3ui/web3uikit/issues
2. Give the issue a title prefixed with feature, bugFix, docs or chore
3. Describe what you will build, or fix as best you can so we know what to expect
4. Add any examples like images, design ideas or CodePen mockups
5. Be open to refinement of your idea
6. Stay in communication, once we accept the proposal we want that component. If you disappear we might finish it for you or pass it to another dev
7. To complete your task and be merged, you should read about Pull Requests below
8. In need of inspiration? Keep an eye on the issue board as our team will open issues for you and even add new designs for components we need, hot from our Moralis design UX team.

&nbsp;

# NewComp

Just a friendly heads up incase you missed that above...
We have made a component called `NewComp` you can copy and paste this component to get started but don't change it or we will reject your pull request, sorry. Suggestions are welcome but we are pretty happy with it.
This component has an example of just about everything with a friendly non programmer comment to help you learn, how we do things, why we do them and what we expect when it comes to a pull request.

Lets take a tour and look at some of our standards

## NewComp index.ts

Simple stuff here, you can basically copy and paste. Its just an index file to give the end user an entry point to call in your awesome component.

&nbsp;

## NewComp stories.tsx

This is where the storybook magic happens. Storybook allows you to build fast and test out state and prop changes in your component easily.
You should checkout their docs here, https://storybook.js.org/docs/react/writing-docs/docs-page but its mainly boilerplate copy and paste in NewComp
The important thing to remember is if your component has different states, for example an optional title. We want to see a story for with title and a story for without title. The next dev should be able to scroll your stories and see all versions / states / combinations of the component.
Finally its cool to know that to save time we import our stories to be tested, this saves us coding the same thing twice and makes testing easy.
Please follow the comments in the file and this should all be very simple.

&nbsp;

## NewComp styles.tsx

Remember when CSS was the easy part? Global CSS is old school and would for sure either involve us using a crazy naming convention or causing CSS bugs in our users dApps, to resolve this problem we use Styled Components.
You can find out more about Styled Components here: https://styled-components.com/docs
You will see lots of comments in here to help you understand our structure, but here is some main take aways

&nbsp;

### CSS naming an element

Naming a styled element:

-   `export const DivStyled = styled.div`
-   `export const SectionStyled = styled.section`
-   `export const H1Styled = styled.h1`

See the pattern?

-   `native element name` => so next dev can understand the markup
-   `Styled` => so next dev can see its a Styled Component

&nbsp;

### Debugging Tips

Do not forget these two sweet tips to make debugging easier!

`DivStyled.displayName = 'MyNewComponent'`
Adding this in the styles after the DivStyled is declared makes bugging with React dev tools easier

`<DivStyled className="MyNewComponent">`
Adding this in the markup will make it easy to debug any CSS issues you might face

&nbsp;

**Q:** But what if there is two `<div>` tags in my component?

**A:** You can add an optional 3rd identifier of your choosing that helps make sense to the next dev

-   `export const DivStyledWrap = styled.div` or
-   `export const DivStyledContent = styled.div` or
-   `export const DivStyledFlex = styled.div`

&nbsp;

BAD EXAMPLES:

-   `export const Wrapper = styled.div`
-   `export const Title = styled.h2`

**Q:** Why is that bad?

**A:** Because the next dev looks at `<Wrapper />` tag and has no idea of its semantic meaning and sees nothing in the DOM that matches the word wrapper so they have to solve your puzzle, its not a hard puzzle sure but if the dev does not need to use brain power, its better DX

&nbsp;

### CSS sorting

You will see a clear example of CSS sorting in action in the `styles.tsx`

1. Imported styles (font, colors, etc)
2. Normal styles (margin, padding, etc)
3. Child elements (span, svg, etc)
4. Pseudo elements (before & after)
5. Modifier styles (hover, active etc)
6. State changed styles `${(p) => (p.prop ? green : red)};`

Note: each should be sorted alphabetically as best as possible. We use a VSCode plugin called [SortLines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines) by Daniel Imms

**Q:** Why such strict ordering?

**A:** Well it looks cleaner, its easy to review for us and it makes sense programmatically as base rules are then over written by interactions or state changes.

&nbsp;

**Q:** Why sort alphabetically?

**A:** Because if the next dev wants to fix `z-index` they know to look at the bottom of the CSS properties, top DX. Also you'd be surprised how many elements out there have padding twice, alphabetical sorting makes this very obvious

&nbsp;

**Q:** Can we add mad colors and fonts and such?

**A:** Nope, sorry. An entire team of skilled designers have made these calls for us, lets have faith in them

&nbsp;

## NewComp test.tsx

The first rule of web3uiKit club, no merge without all stories tested fully.
You will see lots of simple testing examples for elements, text, styles, attributes all the things you would expect from normal React unit tests.
A cool thing to note is we import all the stories and test them, this saves lots of time.
Please try to keep to the boilerplate example we have provided and we have added lots of comments to help you get started with testing.
Rule of thumb, if there is a prop or state change there should be a story, if there is a story, test it.

&nbsp;

## NewComp.tsx

You will see lots of comments in here because we want to try and keep to the same layout to keep things easy for the next dev and for our pull request process.

-   We import our Styled Component tags from the styles file, that is why naming the markup well is very important.
-   We never recreate the wheel, in other words please use elements that we already have. We do not add new HTML for button and new SVG for icon, we already have those battle tested components. If a feature is lacking in `<Input />` for example, open a pull request to ad the feature you need please.
-   Please follow the import order below
-   Please follow this guide for the component internal structure below

### Import order

1. React, { React hooks }
2. Other packages
3. Internal components
4. Props from .types interface
5. Styles

### Component structure

1. Destructure all props
2. Set `const`s and `useState`s needed
3. Set other hooks like `useEffect`
4. Set any internal functions that are needed, like `toggleState` in `NewComp`
5. Set extra `render` methods so not all markup and logic is in one render function if needed. This might be overkill for your component but you can see a good example of this in `<Input />` and `<Form />` where the render method would have been too crazy to look at as one.
6. Render method will return your markup, but if this is complex with lots of logic think about the step above.
7. Export that bad boy! `export default NewComp;`

&nbsp;

## types.tsx

If you are new to TypeScript, fear not! Most of the features we use in this kit are pretty simple to understand, also there is an intro video by myself you can checkout. Don't stress this is a good way to learn and we are here to help. But here are some standards to follow.

-   Use optional properties, we don't want the next dev to need to add 15 props to render a button, that would not be top DX
-   Good use of non optional props... "what is a notification component without text?" Please do use non optional props. It stops the next dev making mistakes by missing props they will need.
-   Passing render options rather than passing CSS, we want to take away the stress of HTML and CSS (more below in questions)
-   Look at `<Input />` its cool because it exports its validation interface to `<Form />` to make sure its strictly typed when called in. Could you make use of this principle in your component?

**Q:** Why not pass CSS

**A:** The next dev will add crazy properties and wonder why our kit is broken, lets reduce the questions and take care of the HTML and CSS for them.

&nbsp;

**Q:** But things like `background: string` is cool, right?

**A:** Honestly we would rather not, we much prefer to use a theme or options like `redColor` or `darkTheme` or `errorState` to return one of the colors that our skilled and experienced team of designers picked. Also a silly dev could set it to 'foo-bar', that is a valid string after all but wont be a nice background color.

&nbsp;

# Pull Request

For your pull request please follow this guide

## Branch Name

`pull request type + component name + task`

-   so if i add a new `<KungFooBar />` component my branch is `feat-kungfoobar-addedComp`
-   or if i added validation to the `<Form />` my branch is `feat-form-validation`

**Pull request types:**

-   feat = new feature
-   fix = bug fix
-   docs = added or changed documentation
-   chore = some mindless work, like reformatting

So if i fix the validation to the `<Form />` my branch is `fix-form-validation`... you get it, right? 😅

## Conventional Commits

We follow a strict convectional commits pattern, and please if you change more than one component, then have 1 commit per components. No monster PRs please, its hard to review them if you change 500 files in one go, lol
https://www.conventionalcommits.org/en/v1.0.0/

## PR Feedback

We are all students in this journey of life, so please accept any critique given. We are just trying to help you out or align your code with our base perhaps. This is a difficult but important part of collaboration and team work.
We say this in the video but please, lets **review each others code and PRs**

**Q:** Why peer review?

**A:** So we can all learn from each other, the rising tide brings up all ships.

&nbsp;

# Approval

Don't forget we can approve and merge your code but you need to add your component to the projects base `index.ts` so the next dev can use it.

&nbsp;

# VSCode Plugins

You will need

-   vscode-styled-components by Julien Poissonnier
-   Prettier by Haixin Chen
-   Sort Lines by Daniel Imms
-   Code Spell Checker by Street Side Software

&nbsp;

# CSS? Nope wont do it!

If you really hate CSS thats ok, we can help you out. Hit me (billgil) up on Discord if you want help.

&nbsp;

# Any questions?

Jump over to the Moralis Discord and checkout the new channel `web3uiKit` feel free to ping @billgil, thats me and i'd love to help you out. Also your questions will help me to improve this doc.

&nbsp;

# Onboarding Video

All aboard! We didn't want to leave anyone behind so we made a video presentation. There is a ton of tips and help to get going in this video.

https://www.youtube.com/watch?v=bhOf56omPmA

Timestamps:

-   0:00 Intro
-   2:35 The repo
-   6:55 Setup
-   17:11 Storybook JS
-   27:58 React Typescript
-   42:04 Styled Components
-   55:38 Testing
-   72:07 Pull Request
