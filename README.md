# Logtools - productivity pack :

a collection of css-based tools and plugins for Logseq.

## Kanban
tag a block with `#.v-kanban` or `#.v-kanban-wide` (more samples here https://discuss.logseq.com/t/css-trigger-columns-kanban-view-with-tags/390) - - see the related Template below
   - options: 
        - `-w100`, `-w150`, `-w200`, `-w300`,`-w400` : adjust width of each column (fixed numbers in px)
        - `-small` : smaller fonts to fit more columns
        - `-wide` : force the use of full-width and horizontal scroll if needed
demo: `#.v-kanban`<br>
<img src="https://user-images.githubusercontent.com/4605693/156956422-9eab8cee-7fbb-4e65-81de-5097c1b96f89.png" max-width="600px">	
  - Kanban starter templates: replace the titles and catagories to your liking, invoke with `/kanban`
	```
	- a Kanban #.v-kanban
	template:: kanban
		- `TO DO`
			- 1
			- 2
		- `IN PROGRESS`
			- 1
			- 2
		- `DONE`
			- 1
			- 2
	- Wide Kanban #.v-kanban-wide
	template:: kanban-wide
		- `UNDER REVIEW`
			- 1
			- 2
		- `RETAKE`
			- 1
			- 2
		- `APPROVED`
			- 1
			- 2
		- `ARCHIVED`
			- 1
			- 2
		- `DROPPED`
			- 1
			- 2
	```    
	
## Eisenhower Matrix

tag a block with `#.v-eisenhower` (https://discuss.logseq.com/t/css-template-eisenhower-matrix/526) 

Priority Matrix  `#.v-eisenhower-matrix`<br>
<img src="https://user-images.githubusercontent.com/4605693/156956223-a9cf13d8-4aa5-4f17-9726-9f5c5a49a3f7.png" max-width="600px">

  - use this template for easy invoke via slash command `/eisenhower-matrix` :
	```
	- #.v-eisenhower-matrix
	template:: eisenhower-matrix
		- [[TODO]]
			-
			-
			-
		- [[DECIDE]]
			-
			-
			-
		- [[DELEGATE]]
			-
			-
			-
		- [[ELIMINATE]]
			-
			-
			-
	```
## Numbered lists
tag a block with `#.v-numlist` (https://discuss.logseq.com/t/css-numbered-lists/387/5) to repace children bullets with incremental numbers (works on 2 sub-levels max for now)
<img src="https://user-images.githubusercontent.com/4605693/157914206-e1220ef0-e14e-47b8-8ded-d86aa5a422b8.png" max-width="600px">

## Border

a utility tag to create borders around blocks.
use `#.v-self-border`; `#.v-border-child` or `#.v-self-border-child` to add a frame/border around blocks. Great to highlight important blocks or to make cards or tables with the kanban or columns tags

demo :
<img src="https://user-images.githubusercontent.com/4605693/156955395-0004e961-4d18-4dc8-9621-8b4168c91b05.png" max-width="600px">


## Gallery

tag a parent block with `#.v-gallery` and put links to images in separate children blocks (by default the images are displayed as 200x200px)
  - options: 
    - `-col2` to `-col7` : defnine the number of columns, images size will auto adjust
    - `-w100`, `-w200`, `-w300`,`-w400` : adjust width of each pic (fixed numbers in px)
    - `-fit` : fit width 
    - `-h300` or `-h400` to change the height, default is 200px
  - demo: `#.v-gallery-fit-` 
<img src="https://user-images.githubusercontent.com/4605693/156956622-fc96e39a-4240-4c22-a4e2-a37cd7b75126.png" max-width="600px">

## Like-Dislike (Pro-Cons) 
tag a bock with `#like` or `#dislike` for reviews or comparisons: it will replace the bullets by `+` and `-` . see the related Template below
demo `#Like` and `#Dislike` (with #.v-kanban applied)<br>
<img src="https://user-images.githubusercontent.com/4605693/156959797-88fbfbeb-fd02-48fb-9e4e-6a72974a1f24.png" wmax-idth="600px">
- pros and cons template(used for reviews or comparisons, works well in conjunction with the #.v-kanban tags)
	```
	- procons #.v-kanban
	template:: procons
		- #like
			-
		- #dislike
			-
	```

## Columns view

usage: `#.v-columns-` followed by a number of columns between 2 and 6. eg `#.v-columns-2`, `#.v-columns-4`, etc...
a complement to Kanban and Gallery. Useful to span content across multiple columns to create a newspaper-like layout or make long lists easier to browse.

- demo `#.v-columns-4`
![columns](https://user-images.githubusercontent.com/4605693/213771673-6c3d4f6c-7afc-4700-8a2b-663fdf2b5714.jpg)
- `.v-columns-2` : a 2 columns, newspapaer-style maybe be easier to browse
![ss_Logseq_quadrant-framing_20230120_CGvxP6OuPR](https://user-images.githubusercontent.com/4605693/213774023-730f63d3-caa1-4c22-826c-b5c375c042ce.jpg)

# INSTALL

* via the Marketplace
* alternatively download the zip and unpack it in a folder of your choice, then in logseq, go to the main `menu > plugins`, then click on `Load unpacked plugin` and point it to the folder `logtools-css-productivitypack` (not the parent folder)
* for use via `CUSTOM.CSS` or on mobile, you can also download the zip, open the `index.js` and copy **only** the css rules from line3 ` /* -- like dislike ----------------------------------------- */` til `/*==== ls-border end ====== */` included and paste them inside you `/logseq/custom.css` file


# TIPS : 
- Try to combine the tags to uncover more possibilities : eg combine Kanban + Borders to create a table with a single tag `#.v-kanban-border-children` or with separate tags `#.V-kanban #.v-border-children` 
- the css was packaged as a plugin in order to auto-update via the marketplace, however, the css rules can also be used in `custom.css` (that's my prefererd way to use it as it works on mobile)
- use the provided starter templates to easily invoke the tools and tags. I usually save all my templates in a dedicated page called `ls-templates.md` for easy management and modification.

Thank you for trying my mod, if you like the plugin and want to buy me a coffee, hit the button :
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/O5O1BN89Y)

