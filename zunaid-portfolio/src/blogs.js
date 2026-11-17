// Blog posts. Write each post's text as paragraphs separated by a blank line.
// Wrap code in backticks (\`like this\`) to show it as inline code.
// NOTE: dates are placeholders - change them to the real publish dates.

import { profile } from './data'

export const blogAuthor = 'Zunaid'
export const blogCover = '/blog-cover.png'

export const subscribeLink = `https://mail.google.com/mail/?view=cm&to=${profile.email}&su=${encodeURIComponent(
  'Subscribe me to your blog'
)}`

function post(slug, title, date, tags, text) {
  const content = text
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
  return { slug, title, date, tags, content }
}

export const blogs = [
  post(
    'become-a-web-developer',
    'What Does It Take to Become a Web Developer?',
    '10.Nov 2026',
    ['Web Developer', 'Beginners', 'Career'],
    `
When someone asks how to get started in web development, I understand why the question feels difficult. The first thing a beginner usually sees is a long list of technologies: HTML, CSS, JavaScript, React, Node.js, databases, Git, deployment platforms and many more. It can look as if everyone else already knows the right order and you are the only person trying to work it out. I had a similar experience. As a Computer Science and Engineering student majoring in Information Systems, I had studied several areas of computing, but knowing the names of technologies and being able to build something with them are two very different things.

The most useful starting point is still the basic structure of the web. HTML gives a page its content and structure. CSS controls its appearance, spacing and layout. JavaScript adds behaviour, such as responding to a click, validating a form or updating part of a page without reloading it. These three are not outdated skills that can be skipped in favour of a modern framework. They are the foundation that makes the rest easier to understand. When I began practising frontend development, I found that even a small page could expose gaps in my understanding. A heading might look simple, but making it readable, aligned and responsive involves several decisions.

I would recommend learning one concept at a time and immediately using it. After learning headings, paragraphs, links and images in HTML, make a basic personal page. After learning CSS selectors, spacing, colours and typography, improve that same page. Then use JavaScript to add one small interaction. This approach is less exciting than installing a large framework on the first day, but it gives each new idea somewhere to belong. It also makes errors easier to understand because there are fewer moving parts.

Once the fundamentals are familiar, it helps to understand what frontend and backend development actually involve. Frontend development focuses on the part of a website that people see and interact with. Backend development handles server-side operations, application logic, authentication and communication with databases. The two sides work together, but a beginner does not need to master both at once. Exploring each area is useful; trying to learn every tool simultaneously usually creates confusion rather than progress.

A small project is the best test of whether a topic has started to make sense. A calculator, a simple student information form or a to-do list may look ordinary, but each introduces practical questions. How should the page be organised? What happens when a user enters invalid information? How should the result be displayed? What if the screen is narrow? These questions turn isolated syntax into problem-solving. I have found that building something imperfect and improving it is more valuable than waiting until I feel completely prepared.

After the first few projects, the next challenge is learning how to work like a developer rather than simply completing exercises. Tools such as Visual Studio Code, Git, GitHub and browser developer tools become part of the normal workflow. They may not seem as interesting as a new framework, but they solve everyday problems. Git keeps a record of changes, GitHub makes projects easier to share, and browser tools help identify layout and JavaScript issues. Becoming comfortable with these tools makes independent work less intimidating.

It is also important to learn how to read errors. A page that does not behave as expected is not automatically a sign that the whole project is wrong. Sometimes a variable name is misspelled, an element has not loaded when a script runs, or a CSS rule is overriding another rule. Instead of changing several things randomly, I try to narrow the problem down. I inspect the relevant element, check the browser console and test one change at a time. This is not a sophisticated technique, but it encourages a habit that becomes increasingly important as projects grow.

A portfolio can help make progress visible. My own academic work has included a Smart Restaurant Management System, an electricity demand prediction research project and a mango leaf detection project. They are different in purpose, but each gives me something concrete to explain: the problem, the tools used, the part I worked on and what I learned. A portfolio should not claim that every project is a production-ready product. It should describe the work honestly and make it easy for another person to understand it. A clear explanation of a modest project is more convincing than an exaggerated description of something the applicant cannot discuss.

Consistency matters more than occasional bursts of effort. A long study session followed by several weeks away from the subject is difficult to build on. A realistic routine might involve reading one concept, practising it, making a small change to a project and writing down what was confusing. Some days the result will be only a small improvement. That is normal. The point is to keep returning to the work and gradually reduce the number of things that feel unfamiliar.

There is no single route that every web developer must follow. Some people enjoy visual design and frontend work; others prefer databases, APIs or infrastructure. It is reasonable to explore before choosing a direction. What matters at the beginning is not collecting the largest possible list of technologies. It is learning the fundamentals, making a few complete projects, understanding the tools used to manage them and being able to explain your decisions. For me, that is a much more useful definition of getting started than simply finishing a course.
`
  ),

  post(
    'why-i-chose-frontend',
    'Why I Chose Frontend Development',
    '01.Nov 2026',
    ['Frontend', 'Career'],
    `
Choosing an area of computer science is not always a clear decision, especially when a degree introduces several subjects at once. During my studies in Computer Science and Engineering, with a major in Information Systems, I encountered programming, databases, systems analysis, networking, machine learning and web technologies. Each subject showed a different side of computing. At first, I did not have a strong reason to prefer one over another. I was mainly trying to understand what the subjects were used for and where I could see myself working in the future.

Frontend development began to interest me because the result of the work is visible. When I change a layout, adjust a button or add an interaction, I can see the effect directly in the browser. That feedback makes learning feel practical. It is easier for me to stay engaged when I can connect a line of code to something a user will actually see or use. A small improvement in spacing or a working form may not be a major technical achievement, but it gives a clear sense of progress.

The part I find especially interesting is the combination of logic and presentation. A frontend developer cannot think only about how a page looks. A form needs to accept useful information, respond to mistakes and communicate what the user should do next. A navigation menu needs to work with a mouse and on a touchscreen. A product card needs to present information in a way that is easy to scan. At the same time, a page should feel organised, readable and consistent. These decisions connect technical implementation with the experience of the person using the website.

My university projects helped me understand that connection. In the Smart Restaurant Management System project, the web interface was part of a larger system involving customer interaction, content management and database functionality. Thinking about a restaurant website is not only a matter of placing attractive images on a page. A customer may need to find information, understand the available options and contact the business without confusion. The interface has to support those tasks. This way of thinking made web development feel connected to real needs rather than just an academic exercise.

I also became interested in how the same information can be presented differently depending on the device. A page that looks organised on a desktop can become difficult to use on a phone if the text is too small, the buttons are crowded or the layout requires horizontal scrolling. That made responsive design feel less like a styling technique and more like a basic responsibility. People should not have to own a particular device to use a website comfortably.

Another reason frontend development appeals to me is that it leaves room for improvement through observation. When I look at a page, I can ask practical questions: Is the main action obvious? Is there too much information competing for attention? Does the page explain what happens after a user clicks a button? Can someone understand the content without reading every word? These questions are simple, but answering them well requires attention. A visually attractive page is not automatically a useful one.

I do not think choosing frontend means ignoring the rest of computer science. Understanding databases, APIs, networking and basic software engineering makes frontend work stronger. A user interface often depends on data coming from somewhere else. Even if a developer is responsible mainly for the browser side, it helps to understand what happens when a form is submitted, how an application receives information and why a request might fail. My coursework has given me a useful introduction to several of these areas, and I want to keep connecting them rather than treating them as unrelated subjects.

There are also parts of frontend development that I find challenging. CSS can behave differently from what I expect, and a layout that looks correct at one screen size may break at another. JavaScript requires careful thinking about values, events and the order in which things happen. Frameworks introduce their own patterns and terminology. It is tempting to assume that learning a popular library will make all of these difficulties disappear. It will not. A framework can organise a project, but it cannot replace an understanding of the browser, the layout system or the language itself.

For a student who is unsure about this field, I would suggest building a small page before making a final decision. It could be a personal profile, a simple information page or a basic form. Spend time making it work on a phone as well as a laptop. Then add one interaction and improve the design based on what feels confusing. The experience will reveal more than reading a list of job titles. You may enjoy the combination of design and logic, or you may discover that another area interests you more.

I am still developing my skills, so I would not describe my choice as a finished career decision. It is a direction I want to explore through practice and projects. What has attracted me so far is the balance between technical problem-solving and visible results. Frontend development gives me a way to build something that people can interact with, while also requiring me to think carefully about clarity, accessibility and usability. That combination is what makes the field worth pursuing for me.
`
  ),

  post(
    'react-vs-plain-javascript',
    'React vs Plain JavaScript: Which One Should You Use?',
    '24.Oct 2026',
    ['React', 'JavaScript'],
    `
When I first started learning about React, it was easy to assume that using a modern framework would automatically make a project better. React appears in many frontend job descriptions and tutorials, so it can feel like the obvious choice for almost every website. With more practice, I began to understand that the better question is not which technology is more popular. It is what the project needs and whether the extra structure will make the work easier to maintain.

Plain JavaScript is often enough for a small website. Imagine a page with a navigation menu, a few sections, a contact form and a button that changes the appearance of an element. These features can be handled with standard browser JavaScript. There is no need to introduce a larger project setup if the page is simple and its behaviour is limited. Using fewer tools can make the code easier to follow, especially for someone who is still learning how the browser works.

JavaScript also helps explain what React is doing. It is the language used to describe the logic of a React application. Concepts such as variables, functions, arrays, objects, conditions and events do not disappear when React is introduced. They become part of the way components are written. If those concepts are unclear, React can feel like a collection of rules to memorise. A learner might be able to copy a component from a tutorial but struggle to change it when the requirements are different.

React becomes useful when an interface has many reusable parts or when the displayed information changes frequently. A dashboard, for example, may contain several cards, filters, tables and status indicators. An online store may show product lists, quantities in a cart and account information. In these cases, components help divide the interface into smaller pieces. Instead of repeating the same structure in several places, a developer can create a component and provide it with different data.

State is another important idea. In a traditional page, a developer may manually find an element and change its content when something happens. React provides a model in which the interface is rendered based on the current data and state. When that state changes, React updates the relevant parts of the screen. This can make complex interfaces easier to reason about, provided the developer understands what information belongs in state and how it should change.

I began to understand these ideas more clearly while working on a personal portfolio website using React. The page was divided into components such as the navigation bar, profile section, skills, projects and footer. That structure made the page easier to organise. It also gave me a practical reason to learn how information could be passed from one component to another, instead of treating the entire page as one large block of code.

The experience also showed me that React does not remove the need for good planning. A project can still become confusing if components are poorly named, responsibilities are mixed together or state is placed in the wrong location. Reusable components are useful only when there is a genuine reason to reuse a piece of interface. Splitting every line into a separate component does not automatically make an application well designed. The goal is to make the structure easier to understand, not to create the maximum number of files.

There is also a practical difference in setup. A plain JavaScript page can often be opened directly in a browser with very little configuration. A React project usually involves a development environment, dependencies and a build process. That setup is worthwhile for many applications, but it adds concepts that a beginner must understand. When I am practising a basic DOM operation or learning how an event listener works, a small JavaScript file is often the clearer place to start.

My rule is to begin with the simplest tool that comfortably solves the problem. If the project is mostly static and needs only a few interactions, plain HTML, CSS and JavaScript may be the right choice. If the interface has repeated elements, changing data and several connected interactions, React may provide a more organised approach. There is no benefit in forcing a framework into a project simply because it appears on a list of modern technologies.

Before moving into React, I would make sure I can work with JavaScript arrays and objects, write functions, use conditions and loops, handle events and understand basic asynchronous behaviour. I would also practise selecting and updating DOM elements. These skills do not need to be perfect, but they should be familiar enough that the learner can explain what the code is doing. React will then feel like a new way to organise familiar ideas rather than a completely separate language.

It is equally important to understand that knowing React is not the same as knowing frontend development. A developer still needs HTML for structure, CSS for layout and presentation, JavaScript for logic, and an understanding of browser behaviour. Accessibility, responsive design, performance and clear content remain important regardless of the framework. A page can use the newest tools and still be frustrating if users cannot find the information they need.

I see plain JavaScript and React as tools for different levels of complexity, not competitors where one must defeat the other. Learning the fundamentals first makes it easier to choose between them. It also makes a developer less dependent on tutorials because the underlying problem can be understood before deciding which tool to use. That is the habit I want to build: choose technology for a reason, understand the trade-offs and avoid making a project more complicated than it needs to be.
`
  ),

  post(
    'responsive-design',
    'Responsive Design Is Not Optional Anymore',
    '15.Oct 2026',
    ['CSS', 'Responsive Design'],
    `
A website can look excellent on a laptop and still be difficult to use. This becomes obvious when the same page is opened on a phone. Text may become too small, buttons may sit too close together, images may extend beyond the screen and sections that looked balanced on desktop may feel crowded. Responsive design addresses this problem by allowing a website to adapt to different screen sizes and ways of interacting with it.

The need for responsive design is easy to understand from everyday internet use. People browse while travelling, compare products on their phones, read articles on tablets and complete longer tasks on computers. A website cannot assume that every visitor has the same screen. Even when the content stays the same, the layout may need to change so that it remains comfortable to use. A row of three cards might work well on a wide screen, while a single-column layout is more appropriate on a narrow one.

One approach that helped me understand this is mobile-first design. Instead of designing a large desktop layout and then trying to squeeze it into a phone screen, start with the smaller layout. Decide what information matters most, make the main actions easy to reach and keep the content readable. Then add layout changes for wider screens. This approach encourages prioritisation. It is harder to hide unnecessary content behind a large desktop layout when the phone version forces you to decide what users really need.

CSS provides several tools for building flexible layouts. Flexbox is useful when items need to be arranged along a row or column, with space distributed between them. CSS Grid is useful for layouts that need control over both rows and columns. Media queries allow styles to change at selected screen widths. Relative units, flexible widths and maximum-width rules can prevent elements from becoming unnecessarily large or overflowing their containers.

I used to think that responsive design mainly meant adding a few media queries near the end of a project. That is an incomplete way to approach it. A layout should be flexible from the beginning. If every section has a fixed width, every image has an arbitrary height and every margin is chosen for one screen size, the design becomes difficult to adapt. It is usually better to use flexible containers and let the layout respond naturally where possible.

The portfolio website I worked on gave me a practical reason to check these details. A design that seemed balanced on a desktop monitor needed adjustments on a smaller screen. Some sections required different spacing, and elements that were comfortably separated on desktop needed more careful arrangement on mobile. Those changes were not just cosmetic. They affected how easily someone could read the content and move through the page.

Testing is an important part of responsive work. Browser developer tools include device emulation, which is useful for checking different viewport sizes quickly. However, it is also worth opening the site on a real phone. Touch interaction feels different from clicking with a mouse. A hover effect may not be useful on a touchscreen, and a button that looks large enough on a desktop can be awkward to tap. Real-device testing can reveal these issues before someone else encounters them.

Responsive design is also connected to content. Long headings may wrap in an unexpected way. Tables may become difficult to read on narrow screens. A large image may push important information far down the page. These problems cannot always be solved by changing widths alone. Sometimes the content needs to be reorganised, a table needs an alternative presentation, or secondary information needs to be placed behind an expandable section. Good responsive work considers the whole experience rather than only the CSS.

It is useful to think about accessibility at the same time. Readable text, sufficient contrast, clear focus states and appropriately sized controls help people use a site in different conditions. A user may be outside in bright light, may have difficulty using a precise pointer or may rely on keyboard navigation. A responsive website should not only fit the screen; it should remain understandable and usable.

There is no single screen width that represents every phone or tablet. Devices vary, browser windows can be resized and people may use split-screen modes. For that reason, I try not to choose breakpoints only because a particular phone model has a certain width. It is more useful to observe where the layout starts to feel cramped and introduce a change at that point. The design should guide the breakpoint, not the other way around.

My main lesson is that responsive design should be part of the development process, not a final repair task. Start with the content, build flexible layouts, use media queries where the design needs them and test at several sizes. A site that works well on one screen but fails on another is not fully finished. When people can read the information, reach the controls and complete their tasks comfortably on the device they already have, the design is doing its job.
`
  ),

  post(
    'git-and-github-for-beginners',
    'Git and GitHub for Beginners',
    '06.Oct 2026',
    ['Git', 'GitHub', 'Beginners'],
    `
At the beginning of a project, saving files can seem like a simple task. A folder contains the current version, and if a major change is needed, a copy can be made before editing. The problem appears after several rounds of changes. Files begin to receive names such as final, final-new and final-updated. It becomes difficult to remember which version contains the working code and which one was saved before an experiment. Git offers a more reliable way to manage this history.

Git is a version control system. It records changes to files over time so that a developer can review previous work and return to an earlier version when necessary. GitHub is an online platform where Git repositories can be stored and shared. They are related, but they are not the same thing. Git can be used locally on a computer without GitHub. GitHub makes it easier to collaborate, share projects and keep an online record of development work.

The first concept to understand is a repository. A repository is the project together with its version history. When Git is initialised in a project folder, it begins tracking changes according to the files selected for version control. The developer can then stage changes and create commits. A commit is a saved point in the project's history, usually accompanied by a short message explaining what changed.

The basic workflow is easier to understand through a small example. Suppose I am working on a portfolio page and have updated the navigation bar. I can inspect the changes, stage the files that belong to that update and create a commit with a message such as "Improve mobile navigation spacing." Later, if I add a project section, I can create a separate commit for that work. The history then tells a more useful story than a folder containing several copies of the same project.

A few commands cover much of the everyday workflow. \`git init\` creates a repository in a folder. \`git status\` shows which files have changed. \`git add\` stages selected changes. \`git commit\` records the staged changes. \`git push\` sends local commits to a remote repository, while \`git pull\` brings remote changes into the local project. These commands are not the whole of Git, but understanding them provides a practical starting point.

Commit messages deserve attention. A message such as "update" does not explain much when viewed several weeks later. A specific message gives context: "Add project descriptions" or "Fix form validation on contact page." The message does not need to be long. It needs to describe the purpose of the change clearly enough that another person, or a future version of yourself, can understand it.

Branches are another useful feature. A branch allows work to happen separately from the main line of development. For example, if I want to experiment with a new layout, I can create a branch and make changes there. The main version remains available while the experiment is in progress. If the new layout works, the changes can be merged. If it does not, the branch can be abandoned without having to reconstruct the original project.

This becomes especially valuable when more than one person is working on the same codebase. Each developer can work on a separate feature and later combine the changes. Collaboration still requires communication because two people may edit the same part of a file, but version control provides a structured way to review and integrate the work. It is much safer than sending project folders back and forth through chat.

GitHub also makes a project easier to present. A repository can include a README file explaining what the project does, the technologies used and how to run it. Screenshots and a live demo link can help visitors understand the result without having to inspect every file. For a student building a portfolio, this context is important. A list of repository links is less useful if a reviewer cannot tell what each project is meant to demonstrate.

I have found it helpful to treat Git as part of the project from the beginning rather than something to add at the end. Creating a repository early, making small commits and writing a short README encourages better organisation. It also creates a record of progress. If a project changes direction, the history can show how it developed and why certain decisions were made.

There are a few mistakes worth avoiding. Do not commit passwords, private keys or other sensitive information. Do not assume that pushing to GitHub is a substitute for understanding what has been committed. Check the status and review the changes before saving them. When working with someone else's repository, read the instructions and understand the branch workflow before making changes. These habits prevent problems that can be difficult to fix later.

The goal is not to memorise every Git command. There are advanced operations, and developers look up commands when they need them. The more important skill is understanding the ideas: a repository tracks a project, commits record meaningful changes, branches isolate work and a remote service allows sharing and collaboration. Once those ideas are clear, the commands become easier to learn.

For beginners, the best way to practise is to use Git on a small project that already matters to you. A portfolio, calculator or class assignment is enough. Make a change, commit it, create a branch and push the repository to GitHub. Try reading the history and restoring a previous version in a safe practice project. The first few steps may feel unfamiliar, but version control quickly becomes a normal part of building software.
`
  ),

  post(
    'how-i-built-my-portfolio',
    'How I Built My Portfolio Website',
    '27.Sep 2026',
    ['Portfolio', 'React'],
    `
A personal portfolio is often treated as something to build after all the important work is finished. I used to think I needed more projects, stronger design skills and a much better understanding of frontend development before I could start one. That way of thinking made the task feel larger than it needed to be. Eventually, I realised that a portfolio does not have to represent the final version of a career. It can show where a student is now, what they have worked on and what they are learning.

Before writing code, I needed to decide what the website should communicate. A portfolio is not simply a place to display every assignment. A visitor should be able to understand who the student is, what they are interested in, which skills they are developing and where to find examples of their work. That meant keeping the structure straightforward. A profile section introduces the person, a skills section summarises relevant areas, a projects section gives evidence of practical work and a contact area provides a next step.

I looked at other portfolio layouts to understand how information could be organised. References are useful because they help answer questions about spacing, hierarchy and navigation. They should not become a reason to copy another person's work exactly. I tried to use the examples as direction while keeping the content connected to my own background. Since I am studying Computer Science and Engineering with a major in Information Systems, the site needed to reflect both technical coursework and the projects I had completed.

I built the website with React to practise working with components. The navigation bar, profile area, skills, projects and footer were separated into reusable pieces. This made the overall structure easier to follow. Instead of keeping every section in one large component, I could focus on one part at a time. It also made the page easier to update. If the wording in the profile section changed, I did not need to search through unrelated parts of the page.

I also worked with props to pass information into components and state for a simple interactive feature. These concepts were easier to understand when they were connected to a visible result. A component can receive content and display it in a consistent format. State can hold information that changes while someone uses the page. A small theme toggle, for example, gives a practical reason to understand how a state update affects what is rendered.

The project content came from real academic work. The electricity demand prediction project involved combining Bangladesh electricity data with weather information and evaluating machine learning models. The Smart Restaurant Management System was a web technologies project involving customer interaction, content management and database functionality. The mango leaf detection project introduced computer vision and image classification. Including these projects gave the portfolio more substance than a page filled with generic skill labels.

The most time-consuming part was not necessarily writing the first version of the components. It was making the layout feel consistent. A page can contain all the required sections and still look unfinished if the spacing changes randomly, headings compete with one another or cards use different visual styles without a reason. I had to look at the page as a whole and decide which elements should stand out. A portfolio should make information easy to find, not make every section demand equal attention.

Responsive behaviour required another round of work. The desktop layout had more room for content, while the mobile version needed a different balance. I checked how the navigation, project cards and text sections behaved at narrower widths. Some spacing needed to be reduced, and certain elements needed to stack vertically. This reminded me that responsive design is not just a technical requirement. It affects whether someone can comfortably use the website.

I also learned to be careful with visual effects. It is tempting to add animations, gradients and decorative elements because they make a design look interesting while working on it. But too many effects can distract from the content. A portfolio is supposed to help a visitor understand the work. If the design competes with that purpose, it is not helping. Removing unnecessary decoration can improve the result just as much as adding a new feature.

Writing the project descriptions was another useful exercise. A title alone does not explain what a project demonstrates. Each description should briefly state the problem, the approach and the tools used. It should also be honest about the scope. A university project should be presented as a university project, not described as a commercial platform if it was never used in that setting. Clear and accurate descriptions make it easier to discuss the work in an interview.

Publishing the website made the project feel complete in a different way. A live link allows someone to view the result without setting up the development environment. It also creates responsibility: links should work, text should be checked and the page should be usable outside the developer's own computer. A portfolio is not finished simply because it runs locally.

If I were starting again, I would still begin with a small version. I would create the main sections, make the layout responsive and publish a working first draft before spending too long on details. Then I would improve the design based on actual testing. It is easier to make thoughtful changes to a real page than to keep imagining a perfect version that never gets built.

The most valuable result was not only having a website to share. Building it gave me a reason to practise React components, props, state, layout decisions and responsive testing in one project. It also forced me to think about how to explain my work to someone who does not know me. A portfolio should grow as its owner grows. Starting with an honest version is more useful than waiting until there is nothing left to improve.
`
  ),

  post(
    'common-css-mistakes',
    'Common CSS Mistakes I Made as a Beginner',
    '18.Sep 2026',
    ['CSS', 'Beginners'],
    `
CSS can look straightforward when the examples are small. A heading receives a colour, a paragraph gets a font size and a button gets a background. The difficulty becomes clearer when several sections need to fit together, the same page must work at different screen sizes and one style begins affecting another. I have learned that many layout problems are not caused by complicated CSS. They come from a few basic ideas that were not fully understood.

One mistake is using fixed widths for too many elements. A container with a width of 1200 pixels may look fine on a large monitor, but it can overflow on a smaller screen. A more flexible approach is to use a width that can shrink, combined with a maximum width that prevents the content from becoming too wide. For example, a content area can occupy most of the available screen while keeping a comfortable reading width on a desktop. The exact values depend on the design, but the principle is to let the layout adapt.

Another common source of confusion is the CSS box model. Every element is made up of content, padding, border and margin. If the width is set without understanding how padding and borders are counted, the final element may be larger than expected. The \`box-sizing: border-box\` rule is useful because it makes the declared width include the padding and border. Applying it consistently can make layout calculations more predictable.

Positioning is another area where beginners can create problems for themselves. \`position: absolute\` can be useful for elements that genuinely need to be placed relative to a containing block, such as a small badge over an image. But using it to position every section or force elements into place often causes trouble when the screen changes. Flexbox and Grid are usually better choices for arranging the main structure of a page because they are designed to manage relationships between elements.

Spacing also deserves a system. If every heading, card and section uses a different margin without a clear reason, the page begins to feel inconsistent. I find it easier to choose a small spacing scale and reuse it. The same idea applies to colours, font sizes and border radii. CSS custom properties can store shared values so that they can be changed in one place. This does not mean every component must look identical; it means the differences should feel intentional.

A further mistake is writing repeated styles in several places. At first, copying a rule may seem faster. Later, changing a shared colour or spacing value becomes a search task. Reusable classes and variables make the stylesheet easier to maintain. They also reduce the chance that two parts of the page will drift apart after several rounds of editing.

The browser's developer tools are one of the most useful ways to understand CSS behaviour. I used to make a change, refresh the page and guess what had happened. Inspecting an element gives a much clearer picture. The styles panel shows which rules apply, which ones are overridden and how the browser calculates the final dimensions. The layout tools can also help explain Flexbox and Grid. Instead of treating CSS as a mystery, the developer can inspect the result and test a change immediately.

Specificity is another concept worth learning early. When two CSS rules target the same property, the browser needs a way to decide which one takes priority. A more specific selector can override a general one, and source order can matter when specificity is equal. Beginners sometimes respond by adding more selectors or using \`!important\` repeatedly. That can make the stylesheet harder to reason about. It is usually better to understand why the original rule is not applying and simplify the structure where possible.

Images can create layout problems too. An image may be wider than its container or have a different aspect ratio from the space reserved for it. Setting a sensible maximum width and allowing the height to remain proportional prevents many overflow issues. When images need to fit into cards with consistent dimensions, the design should decide whether they should be cropped or displayed fully. The \`object-fit\` property can help, but it should be used according to the purpose of the image.

Responsive styles are easier to manage when the base layout is flexible. Media queries should be used when the design needs a meaningful change, not as a collection of patches for every device. If a card layout can naturally wrap, it may need fewer breakpoints. If a navigation menu becomes too crowded, a breakpoint can introduce a more suitable arrangement. Testing the page at several widths helps reveal where a change is genuinely necessary.

Accessibility should not be left out of CSS decisions. Low-contrast text may look stylish on a designer's screen but be difficult to read. Removing focus outlines can make keyboard navigation confusing. Small controls can be frustrating to use on touchscreens. A good visual design needs to remain usable, not just attractive in a screenshot.

My biggest lesson is to avoid fixing symptoms without understanding the cause. If an element is in the wrong place, first inspect its parent, layout method, width and spacing. Do not immediately add absolute positioning or a negative margin. If a rule is being overridden, inspect specificity and source order. If the layout breaks on mobile, reconsider the structure rather than adding random pixel adjustments.

CSS becomes easier when the fundamentals are treated as a connected system. The box model explains dimensions, Flexbox and Grid explain layout, responsive rules handle changing space, and developer tools reveal what the browser is doing. A beginner does not need to know every property. Understanding these core ideas and practising them on real pages is a much stronger foundation than memorising a long list of CSS tricks.
`
  ),

  post(
    'tailwind-vs-bootstrap',
    'Tailwind CSS vs Bootstrap: My Honest Opinion',
    '09.Sep 2026',
    ['Tailwind', 'Bootstrap', 'CSS'],
    `
Bootstrap and Tailwind CSS are often compared because both help developers build interfaces more quickly, but they approach the problem in different ways. Bootstrap provides a collection of ready-made styles and components. Tailwind provides utility classes that can be combined to create a design directly in the markup. Neither approach is automatically better. The right choice depends on the project, the team's familiarity with the tool and how much control the design needs.

Bootstrap is approachable when a developer wants common interface elements without designing every detail from scratch. It includes patterns for buttons, navigation bars, forms, cards, modals and responsive layouts. Its grid system can also make it easier to organise content. For a student building a small project under time pressure, this can be useful. A page can reach a consistent starting point quickly, and the developer can focus on the required functionality.

The disadvantage is that a Bootstrap interface can look familiar in a way that is not always desirable. Since the framework provides established styles, several projects may share a similar appearance if they are not customised. That is not necessarily a problem for an internal tool or a prototype, but a portfolio or branded website may need a more distinctive visual identity. Customisation is possible, although it requires understanding how Bootstrap's styles are structured.

Tailwind takes a different approach. Instead of selecting a pre-designed component, the developer combines utility classes for spacing, colour, typography, layout and other properties. A class can define padding, another can set a text size and another can control how an element behaves at a particular screen width. This gives developers direct control over the final appearance without needing to write a separate CSS rule for every small adjustment.

At first, Tailwind markup can look crowded because many classes appear next to the HTML. That can make a component difficult to scan if it becomes too long. Over time, the utility-based approach can become efficient, especially when the project has a clear design system and repeated components. Shared patterns can be extracted into components so that the same group of styles does not need to be rewritten everywhere.

For me, the main difference is the starting point. Bootstrap offers more decisions that have already been made. Tailwind gives more control over the decisions. If the goal is to produce a familiar interface quickly, Bootstrap can be a sensible option. If the project needs a specific visual direction and the developer is comfortable composing styles, Tailwind can be a better fit.

It is important not to confuse a CSS framework with an understanding of CSS itself. Bootstrap does not remove the need to understand the box model, responsive layouts or spacing. Tailwind does not remove the need to understand them either. If an element is overflowing, a developer still needs to know why. If a layout needs to change on a smaller screen, the developer needs to understand the relationship between the elements and the available space. Framework classes can make the work faster, but they do not replace the thinking.

The learning experience can also be different. Bootstrap may feel easier to start with because a component can be added with a small amount of markup. Tailwind requires the learner to become familiar with a wider set of utility classes and how they combine. However, Tailwind can encourage more direct practice with CSS concepts because the developer repeatedly makes choices about spacing, layout and typography. The better learning path depends on what the student already understands and what the project requires.

Consistency is another consideration. A design system should define more than a collection of attractive colours. It should establish spacing, typography, component behaviour and responsive rules. Bootstrap provides conventions that can help maintain consistency. Tailwind can support a custom system through configuration and reusable components. In both cases, the developer needs to make decisions and apply them carefully.

Performance and maintainability should be considered in context rather than through slogans. A framework may include styles that a particular project does not use, while a utility-based workflow can produce a large amount of class markup. Modern build tools can help manage the final output, but the details depend on configuration and usage. It is better to measure the actual project than to assume that one tool always produces a smaller or faster website.

When choosing between them, I would ask a few practical questions. Does the project need a familiar set of components quickly? Is there an existing Bootstrap-based codebase that the team already understands? Does the design require a distinctive appearance with detailed control over spacing and responsive behaviour? Will several developers maintain the same interface? These questions are more useful than choosing a framework because it is trending.

I also think it is reasonable for a beginner to try both on small exercises. Build a simple navigation bar and card layout with Bootstrap. Then build a similar layout with Tailwind. Compare how much customisation was needed, how readable the markup feels and how easy it is to make a change. That experience will be more informative than a general argument about which framework is superior.

My conclusion is simple: Bootstrap is convenient when ready-made components and familiar conventions are useful; Tailwind is attractive when a more custom design and utility-based workflow make sense. Neither one replaces HTML, CSS or good layout decisions. The framework should support the project rather than become the purpose of the project. Understanding the fundamentals gives a developer the freedom to choose either tool without depending on it blindly.
`
  ),

  post(
    'first-frontend-internship-bangladesh',
    'Tips for Getting Your First Frontend Internship in Bangladesh',
    '31.Aug 2026',
    ['Internship', 'Career', 'Bangladesh'],
    `
Looking for a first internship can be frustrating. Many listings ask for practical experience, but students are applying precisely because they want an opportunity to gain that experience. It is easy to read a long list of requirements and assume that an applicant must already know everything. In reality, internship roles are usually intended for people who are still learning. The challenge is to show that you have a useful foundation, can communicate clearly and are willing to work through unfamiliar tasks.

For a CSE student in Bangladesh, university coursework can provide a starting point, but coursework alone may not make an application stand out. A project gives an employer something concrete to review. It shows how the student approached a problem, organised the work and used the technologies listed on the CV. A small project that is complete and clearly explained can be more useful than a long list of tools that the applicant has only seen in a tutorial.

The project does not need to be complicated. A responsive personal website, a form with validation, a simple dashboard or a small CRUD application can demonstrate practical skills. The important part is to explain what the project does and what you contributed. If it was completed as part of a group, be clear about your own responsibilities. If it was an academic assignment, say so. Accuracy makes the project easier to discuss and avoids creating expectations that cannot be supported in an interview.

A portfolio website can bring these examples together. It should load properly, work on mobile and make the most relevant information easy to find. A visitor should not have to search through several pages to locate projects or contact details. Include links that work and short descriptions that explain the purpose of each project. A portfolio is not a substitute for a CV, but it can make the CV more convincing by showing examples.

The CV itself should be easy to scan. For a student, education, relevant skills, projects and contact information are usually more useful than a long personal statement. Use clear section headings and consistent formatting. Avoid claiming expertise in a technology if you have only completed a basic tutorial. It is better to describe your level honestly and then explain what you have built with it. Before sending an application, check spelling, dates, links and the PDF layout.

It is also worth tailoring the application to the role. A frontend internship should highlight relevant web projects and skills rather than giving equal space to every university subject. If the job description mentions HTML, CSS, JavaScript, React and Git, make sure the CV shows where you have used those skills. Do not copy the job description into the CV. Give evidence through projects, coursework or practical exercises.

Finding opportunities requires more than checking one website. LinkedIn and Bdjobs are useful places to look, but students can also follow company pages, university career channels and relevant developer communities. Seniors and classmates may know about openings that are not widely advertised. When contacting a company directly, keep the message short and professional. Introduce yourself, state the type of internship you are seeking and provide a CV or portfolio link. A long message that does not explain the purpose is less likely to receive a useful response.

Preparing for an interview is not only about memorising definitions. An interviewer may ask how a project works, why a particular technology was used or what the student would improve next. It is important to be able to explain your own work without relying on a prepared paragraph. Review the projects listed on the CV. Be ready to discuss the problem, the main features, the tools and the difficulties encountered. If you do not know an answer, say so clearly and explain how you would approach finding it.

For frontend roles, practise the fundamentals. Understand the structure of HTML documents, common CSS layout methods, responsive design and basic JavaScript. If React is listed as a requirement, be ready to explain components, props and state at a beginner level if that reflects your experience. Basic Git knowledge is also useful because many teams use version control. There is no need to claim advanced knowledge, but you should be able to describe what you have actually used.

A first internship should also be evaluated carefully. Read the role description and understand what the company expects from an intern. Ask about the tasks, supervision, working hours, duration and whether the arrangement is remote or onsite. A role that offers no clear learning plan or asks for substantial unpaid production work deserves careful consideration. Students should not assume that every opportunity is automatically valuable simply because it has the word internship in the title.

Rejection is part of the process. An application may not receive a reply, or an interview may not lead to an offer. That can be discouraging, but it does not provide a complete judgement of a student's ability. It may reflect timing, competition or a mismatch between the role and the applicant's current skills. The useful response is to review what can be improved: the CV, the portfolio, the project explanations or interview preparation.

The most effective approach is to make progress on several fronts without trying to do everything at once. Keep one or two projects in good condition, update the portfolio when there is meaningful new work, apply to suitable roles and practise explaining your experience. For students in Bangladesh, opportunities can come through formal job platforms as well as university and professional networks. A clear application and honest evidence of practical work will not guarantee an internship, but they give an employer a much better reason to consider you.
`
  ),

  post(
    'first-year-of-coding',
    'What I Learned From My First Year of Coding',
    '22.Aug 2026',
    ['Learning', 'Beginners'],
    `
When I look back at the time I spent learning programming, the most important lessons are not only about syntax. They are about how to approach a subject that often feels confusing before it becomes familiar. At university, programming is one part of a much wider Computer Science and Engineering curriculum. There are also databases, networking, systems analysis, software engineering and other subjects. Learning to write code while trying to understand all these areas can make progress feel uneven.

One of the first things I learned is that being stuck is normal. A beginner can spend a long time on a small problem because a variable has the wrong name or a condition is not doing what they expected. It is easy to interpret that experience as proof that programming is not for you. But getting stuck is part of the work. The important skill is learning how to investigate the problem instead of giving up or changing random lines until something appears to work.

Breaking a problem into smaller parts helps. If a form is not behaving correctly, I can check whether the HTML fields are present, whether the JavaScript is selecting the right elements, whether the event listener is running and whether the validation condition is correct. Looking at one part at a time makes the problem less overwhelming. It also helps me explain what I have tested and what I still do not understand.

Another lesson is that watching tutorials can create a false sense of progress. A video may make a concept look easy because the instructor already knows what to type and why. Following along is useful for seeing a process, but it does not prove that the learner can repeat it independently. The real test comes when the example is closed and a slightly different problem needs to be solved. That is when the learner discovers which parts are understood and which parts were only copied.

I have found it more useful to combine tutorials with small exercises. After learning about functions, write a few functions without following the video. After learning about arrays, practise adding, finding and transforming values. After learning about DOM events, build a small interaction. The exercise does not need to be original or impressive. It needs to make the learner retrieve the idea and use it without being shown every step.

Projects make the learning process more meaningful because they connect several concepts. A calculator requires inputs, event handling and basic logic. A student form involves structure, validation and feedback. A portfolio brings together layout, content and responsive behaviour. These projects are not proof of advanced skill, but they provide a place to practise and a way to notice improvement.

I also learned that comparing progress with other students can be misleading. Someone may have started programming years earlier, may have more time to practise or may already have experience outside university. Looking only at their results can make my own progress seem insignificant. A better comparison is with the work I could do a few months ago. If I can now understand an error that previously stopped me, or build a page with less help, that is real progress.

Asking for help is another skill. It is useful to try to solve a problem independently, but there is no advantage in spending hours hiding confusion. A classmate, senior, instructor or online community may be able to point out a missing concept. The quality of the question matters. Instead of saying only that the code does not work, explain what you expected, what happened, what you tried and what error appeared. This gives someone enough information to help and often makes the problem clearer even before they reply.

Documentation and search are part of learning too. Developers do not remember every property, method or command. They look things up. The challenge is to search for the right information, recognise whether a source is relevant and understand the answer rather than copying it blindly. Official documentation can feel difficult at first, but learning to read examples and descriptions becomes increasingly useful as the number of tools grows.

There is also a difference between understanding a concept and being able to use it under pressure. I may understand how a loop works when reading an example but struggle to write one in a new situation. That does not mean the concept has been learned completely. Repetition is necessary. Returning to an idea after a few days and using it in a different exercise helps make it more familiar. It is better to practise a few important concepts regularly than to rush through a large number of topics once.

I do not think every student needs to become an expert programmer to have a useful career in technology. Computer science includes many areas, and different roles require different strengths. Still, learning programming develops a way of thinking about problems: define the goal, break it down, test assumptions and improve the solution. Those habits are useful beyond writing code.

The biggest change in my approach has been to accept that learning is not a straight line. Some topics make sense quickly; others need several attempts. Some projects are completed smoothly, while others reveal gaps that send me back to the basics. Instead of treating those moments as wasted time, I try to use them to decide what to practise next.

If I could give one practical suggestion to someone starting out, it would be to build small things and keep them. Save the projects, write down what was difficult and revisit them later. Progress becomes easier to see when there is evidence of it. A year of learning will not make every problem easy, but it can make more problems understandable. That steady improvement is what I want to continue.
`
  ),
]

// Short preview text for the blog cards
export function getExcerpt(blog, length = 140) {
  const first = blog.content.find((block) => typeof block === 'string')
  if (first.length <= length) return first
  return first.slice(0, first.lastIndexOf(' ', length)) + '...'
}

// Reading time at roughly 200 words per minute
export function getReadTime(blog) {
  const words = blog.content
    .map((block) => (typeof block === 'string' ? block : block.heading))
    .join(' ')
    .split(/\s+/).length
  return Math.max(1, Math.round(words / 200)) + ' Min'
}
