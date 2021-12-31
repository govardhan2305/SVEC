### front end Technologies

+ vcs (Sourcve code mangement)
	- Distributed VCS
		- Git,Mercurial
	- Remote (Central) VCS
		- Github
### back end technologies

### Git
 - git init
 - git add filename
 - git add .
 - git status
 - git config --global user.name "email-id"
 - git commit -m "message"
 - git remote add origin(link)
 - git push origin main

### html
- Hyper Text Markup Language
- semantic elements
	- header
	- article 
	- aside
	- footer
	- table
- Block Level Elements
	- ocuupy entire width of browser
	- example
	- h1 to h6
	- paragraphs
	- div
	- all semantic elements
	- text will start from new line

- InLine elements
	- span
	- img
	- a 
	- nav 
	- form
	- text area
	- legend
	- sup
	- sub

### Task :
=====
 - audio
 - video
 - canvas
 - progress
 - datalist
 - meter
 - select
 ### task2 :
  - Index.html
  - register.html
  - login.html

 ### css
 - Cascading Style Sheets
 - Inline css
 - internal css
 - external css

+ Syntax for css
...
selector{
	css properties
}

### selectors
+ Simple selectors
	- universal selector(*)
	- by element name
	- Grouping selector(,)
	- class selector
	- id selector
+ combinators
	+ Descendant selector ( )
	+ child selector (>)
	+ Adjacent sibiling selector (+)
	+ General  Sibiling selector (~)
+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector
### box model
+ margin
+ border
+ padding 
	- padding :10px(for all adjacent sides)
	- padding :10px 30px(10px for top&bottom and 30px for lft and rght)
	
+ Width
+ 1rem:16px
### flex-box
 + display
  - flex
	- flex wrap
	- justify-content
	- flex direction
	- flex flow
 + position
	- static
	- relative
	- absolute
	- fixed
	- sticky
 + align content
 + align-items
 + align-self
 ### Media queries
  - Extra small devices (Mobiles)
	- max-width:600px
  - Small Devices(large phones)
	- min-width:600px
  - Medium Devices(small laptops)
	- min-width:768px
  - Large Devices(desktops)
    - min-width:992px
  - Extra large Devices()
	- min-width:1200px

  ...
  @media only screen(min-width:320px)and (max-width:500px)
  {
	  css code
  }...
### BootStrap 4.6
- It is a Css Framework

Task3 :
=====
	- Navbar with Responsive

- module  (collections of functions and classess)
- package (collections of modules)
- library (Collection of packages)
- Frameworks (collections of libraries)
	+ module ----> package --->  Library --> Framework
	
+ Types of Modes
	- offline
	- online
		- CDN links

+ background colur -bg
+ text-white
+ margin in bootstrap(m-*(0-5))
	- 0 --> 0rem
	- 1 --> 0.25rem(4px)
	- 2 --> 0.5rem(8px)
	- 3 --> 1rem(16px)
	- 4 --> 1.5rem(24px)
	- 5 --> 3rem(48px)
	- ml-8  (margin left)
	- mt (margin top)
	- mb (margin bottom) 
	- mr (margin right)

+ padding (paddin-left --> pl-5)
+ colors
 - primary
 - secondary
 - info
 - success
 - warning
 - danger
 - light
 - dark
 - white
 
+ We can use color classses for
	- Buttons(btn btn-primary)
	- text(text-white)
	- backgrounds(bg-secondary)
	- alerts (alert alert-primary)

+ Grid system
	- col-sm-12
	- sm (small devices)
	- md (medium devices)
	- lg (large devices)
	- xl (Extralarge devices)

### JavaScript

+  In 1995 'Brenden Eich' introduces Javascript (es-262)
+ JavaScript loosely touple and dyanmic language
+ it is a text based programming language and we can run client-side and server-side for dyanmic web applications
- ECMA-Script (ES-60)
	- let & const
	- map ()
	- arrow function
	- classes

+ Datatypes
  - Number
  - Bigint (2^53-1)
  - String
  - Boolean
  - Undefined
  - null
  - object*
  - array*


+ Variables 
	- var,let &const
	- Scope
	  - function level ---> var
	  - block level --> let & const

	 
	- Redefine
	- Redclare
+ 'typeof()'
+ object

...
{
	name:"employe"
}
+ to generate notifications
 - alert
 - prompt (to take input from the user )
 - confirm


+ console statements
 - console.log()
 - console.info()
 - console.warn()
 - console.error()

 + Spread operators

	- To change array elemnts from one array to another array
  ---
		---variablename
  ---
  - rest parameter 
	- to handle function parameter.
	...
	
	...parameter

	...

	+ Destruction of Array &objects

	+ Functions

	 -function with functionname
	 ...
	  function demo(x,y){
		  return x+y
	  }
	  ----
	  + Anonymous function
	  ----
	  let demo=function (x,y)
	  {
		  return x+y
	  }
	  ----
	  - Arrow function
	  ----
	  let demo=(x,y)=>{
		  return x*ys
	  }
 + for-in
	- TO get index values of an array
+ for-of
   - to get elements inan array

+ forEach() ----> (Es-5)
+ map() --->(ES-8)

### DOM
- Document object Model
- document
- history
- window
- navigator 

+ DOM methods
	- getElementById()
	- getElementByClassName()
	- querySelector()
	- innertext
	- textContent
	- append
	- appendChild
	- innerHTML
	- setAttribute()
	- ClassList
	- style
	- src

### JSON
+ Javascript Object notation
	- To exchange information between application and server

...
{
	"name":"Govardhan",
	"salary"
}


+ Ajax call or promises (fetch API) or axios.


### ReactJS


### ReactJS features

+ it is a library
+ It folows component based architecture
	- Function Component
	- Class Component
	- pure component
	- High Order Component

+ It provides virtual DOM
+ It provides JSX (JvaScript and XML)
+ Unidirectional data flow
+ Single page applications

+ props
	- to pass data from one component to another component we will use props
	- Props are immutable

	+ UnionBank (Functional)
		- AndhraBank(Functional)
		- CorporationBank (class)

+ States

	- In react to maintain information we will use States
	- We can maintain states in class component only (Before react16.8version)
	- To take state in react try to create constructor above render method and inside of  Class component
	- use 'rconst' snippet.
	...

	constructor(){
		super();
		this.state{

		}
	}
	...

	- To update the information inclass component use 'setState()' method.



+  Project Environmental Setup
	- [DownloadVSC](https://code.visualstudio.com/Download)
	- [DownloadNodejs](https://nodejs.org/en/)
	- install nodejs and check versions of'node' and 'npm'
		- 'node -v'
		- 'npm -v'
	- 'webpack' and 'babel'
	- 'create-react-app'
		- 'npm install create-react-app'
			- 'create-react-app projectname'
		- 'npx create-react-app appname'

+ Index.html
+ index.js
+ App.js
	+ IndexPage
		- nav.js
		- body.js
		- footer.js


		+ Home.js
			- nav
			- body
			- footer
		+ Login.js
		+ Register
		+ About
		+ contact

		

### reference links
 - [flaticon](https://www.flaticon.com/)
 - [colorcode](https://htmlcolorcodes.com/)
 - [contrastchecker](https://webaim.org/resources/contrastchecker/)
 - [SVG Icons](https://freesvg.org/)

