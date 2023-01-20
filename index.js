function main () {
   logseq.provideStyle(String.raw`
    /* -- like dislike ----------------------------------------- */

        .ls-block[data-refs-self*="like"] .block-children .bullet-container .bullet {
            display: none;
        }

        .ls-block[data-refs-self*="like"] .block-children .bullet-container:after {
            content: "+";
            font-size: 20px;
            color: #1cd41c;
        }

        .ls-block[data-refs-self*="dislike"] .block-children .bullet-container:after {
            content: "-";
            color: red;
        }

        a.tag[data-ref*="like"] {
            font-size: .8rem;
            background: #014935e0;
            color: rgb(202, 247, 118);
            padding: 0 6px 3px;
            border-radius: var(--ls-border-radius-low);
            border: 1px solid rgba(137, 207, 96, 0.925);
        }

        a.tag[data-ref*="dislike"] {
            font-size: 13px;
            background: #4b033bda;
            color: rgb(255, 116, 128);
            padding: 0 6px 3px;
            border-radius: var(--ls-border-radius-low);
            border: 1px solid rgba(182, 13, 41, 0.925);
        }

        a.tag[data-ref*="like"]:hover {
            filter: contrast(2) brightness(10);
        }

        a.tag[data-ref*="like"]:before {
            content: "😀  ";
            font-size: 13px
        }

        a.tag[data-ref*="dislike"]:before {
            content: "😣  ";
            font-size: 13px
        }

    /* -------------------------------- like dislike end  ------ */

    
    /*===========================================================*/
    /* css columns view / kanban  v20220510--------------------- */
    /* use: inline tag #kanban, #kanban-small or #kanban-wXXX    */
    /* try:  #kanban-w200,#kanban-w300, #kanban-w400             */

        div[data-refs-self*="kanban"]>.block-children-container.flex {
            width: 100%;
        }

	        div[data-refs-self*="kanban"]>.block-children-container.flex>.block-children.w-full {
	            display: inline-flex;
	            position: relative;
	            overflow-x: auto !important;
	            overflow-y: hidden;
	            margin: 0 10px;
	        }

		        div[data-refs-self*="kanban"]>.block-children-container.flex>.block-children.w-full>div.ls-block {
		            display: inline-block;
		            padding: 0;
                    width: inherit;
                    min-width: 200px;
		            margin-right: 10px;
       			}

        /* wide */

        div[data-refs-self*="kanban-small"]>.block-children-container.flex>.block-children,
        div[data-refs-self*="kanban-wide"]>.block-children-container.flex>.block-children {
            min-width: 90vw;
            left: 50%;
            transform: translate(-50%);
            background-color: var(--ls-primary-background-color);
            overflow-x: scroll !important;
            overflow-y: hidden;
            margin: 10px 30px;
        }
        
        div[data-refs-self*="kanban-wide"]>.block-children-container.flex>.block-children>div.ls-block {
            display: inline-block;
            min-width: 350px;
            padding: 8px 0px !important;
            font-size: 0.85rem;
            margin: 5px 0px;
            background-color: var(--ls-secondary-background-color);
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
            border-radius: var(--ls-border-radius-medium);
        }


        /* #kanbansmall : smaller font with hover zoom */

            div[data-refs-self*="kanban-small"]>.block-children-container.flex>.block-children>div.ls-block {
                display: inline-block;
                min-width: 350px;
            }

            div[data-refs-self*="kanban-small"]>.block-children-container.flex>.block-children .block-content {
                font-size: 10px;
                font-weight: 300;
            }

            div[data-refs-self*="kanban-small"]>.block-children-container.flex>.block-children .block-content:hover {
                font-size: 14px !important;
                min-width: 100px;
            }


        /* #kanban-w[100-300] : force width of the columns */

            div[data-refs-self*="kanban-w100"]>.block-children-container.flex>.block-children.w-full>div.ls-block {
                min-width: 100px;
            }

            div[data-refs-self*="kanban-w150"]>.block-children-container.flex>.block-children.w-full>div.ls-block {
                min-width: 150px;
            }

            div[data-refs-self*="kanban-w200"]>.block-children-container.flex>.block-children.w-full>div.ls-block {
                min-width: 200px;
            }
            div[data-refs-self*="kanban-w300"]>.block-children-container.flex>.block-children.w-full>div.ls-block {
                min-width: 300px;
       		}
            div[data-refs-self*="kanban-w400"]>.block-children-container.flex>.block-children.w-full>div.ls-block {
                min-width: 400px;
            }
            div[data-refs-self*="kanban-fit"]>.block-children-container.flex>.block-children.w-full>div.ls-block {
                min-width: 400px;
                    width: max-content; 
            }
        
        /* remove left border for kanbanized */
            [data-refs-self*="kanban"] .block-children-left-border {
                opacity: 0;
            }

        /* fix modal list not appearing*/
            .block-children {
                overflow: visible !important;
            } 

            .ls-block[data-refs-self*="kanban"] .absolute-modal,
            .ls-block[data-refs-self*="kanban"] #ui__ac {
                min-height: 80px;
            }
            
    /*--------------------------------------------- kanban end-- */
     
    
    /*===========================================================*/
    /* Gallery - flexrow wrap v20220413------------------------ */
    /* - #.v-gallery : create image galleries, default 200x200px */ 
    /* options:                                                  */
    /*     width: -w100 ; -w200 ; -w300 ; -w400 ; -fit           */
    /*     heighht: -h300; -h400 ; default height : 200px        */
    /* eg use #.v-gallery-fit-h300 to fit image widthx300px      */
    
        div[data-refs-self*="gallery"]>.block-children-container.flex {
            width: 100%;
        }
        [data-refs-self*="gallery"]>.block-children-container.flex .block-content .asset-container {
            margin-top: 0rem;
        }
        div[data-refs-self*="gallery"]>.block-children-container.flex>.block-children.w-full {
            display: inline-flex;
            position: relative;
            margin: 0px -30px;
            flex-flow: row wrap;
        }

        div[data-refs-self*="gallery"]>.block-children-container.flex>.block-children.w-full>div.ls-block {
            padding: 0;
            margin: 5px -15px;
            width: 200px;
            height: 200px;
            overflow: hidden;
        }

        div[data-refs-self*="gallery"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            object-fit: cover !important;
            height: 200px !important;
            width: 200px !important;
        }
        /* #gallery-col[2-7] : force number of columns - better for pics with same width */   
        div[data-refs-self*="-col"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-col"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            object-fit: cover ;
            width: auto !important;
            height: auto !important;
         }
        div[data-refs-self*="-col2"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-col2"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            flex-basis: 50%;
         }
        div[data-refs-self*="-col3"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-col3"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            flex-basis: 33%;
         }
        div[data-refs-self*="-col4"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-col4"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            flex-basis: 25%;
        }
        div[data-refs-self*="-col5"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-col5"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            flex-basis: 20%;
        }
        div[data-refs-self*="-col6"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-col6"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            flex-basis: 18%;
        }
        div[data-refs-self*="-col7"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-col7"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            flex-basis: 15.5%;
        }
        /* #gallery-w[100-300] : force width of the columns */
        div[data-refs-self*="-w100"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-w100"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            width: 100px !important;
        }
        div[data-refs-self*="-w150"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-w150"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            width: 150px !important;
        }
        div[data-refs-self*="-w200"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-w200"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            width: 200px !important;
        }
        div[data-refs-self*="-w250"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-w250"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            width: 250px !important;
        }
        div[data-refs-self*="-w300"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-w300"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            width: 300px !important;
        }
        div[data-refs-self*="-w400"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-w400"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            width: 400px !important;
        }
        div[data-refs-self*="-fit"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-fit"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            min-width: 200px !important;
            width: max-content !important; 
            object-fit: contain;
        }

        div[data-refs-self*="-h300"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-h300"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            height: 300px !important;
        }
        div[data-refs-self*="-h400"]>.block-children-container.flex>.block-children.w-full>div.ls-block,
        div[data-refs-self*="-h400"]>.block-children-container.flex>.block-children.w-full>div.ls-block img {
            height: 400px !important;
        }
        /* remove left border and bullets for gallery */
        [data-refs-self*="gallery"] .block-children-left-border,
        [data-refs-self*="gallery"] .block-children-container.flex .bullet-container {
            display: none;
        }

        [data-refs-self*="gallery"]>.block-children-container.flex .block-children-container.flex {
            margin: 0px !important;
            line-height: 0.2rem;
            padding-bottom: 0;
        }

    /*--------------------------------------------- gallery end-- */

    /*===========================================================*/
    /* colorful indent levels ---------------------------------- */
        :root {
            --ph-indent-lvl2: rgba(189, 189, 189, 0.42);
        }

        .block-children-left-border {
            z-index: 1;
            position: absolute;
            height: 100%;
            width: 1px;
            padding-right: 0px;
            border-radius: 2px;
            background-color: var(--ls-border-color);
            left: 0px;
            top: -12px;
            transition: background-color 0.2s ease 0s;
            opacity: 1;
        }
        .block-children {
            border-left: 1px solid transparent;
        }
        .block-children-left-border:hover {
            background-color: var(--ls-block-bullet-active-color);
            width: 2px;
        }
 
        .block-children [level="2"]>.block-children-container.flex>.block-children-left-border {
            background-color: var(--ph-indent-lvl2);
            opacity: 0.42;
        }
        .block-children [level="3"]>.block-children-container.flex>.block-children-left-border {
            opacity: 0.42;
            background-color: rgb(221, 171, 64);
        }

        .block-children [level="4"]>.block-children-container.flex>.block-children-left-border {
            opacity: 0.42;
            background-color: rgb(255, 0, 0);
        }

        .block-children [level="5"]>.block-children-container.flex>.block-children-left-border {
            opacity: 0.42;
            background-color: rgb(247, 0, 255);
        }

        .block-children [level="6"]>.block-children-container.flex>.block-children-left-border {
            opacity: 0.42;
            background-color: rgb(58, 137, 255);
        }

        .block-children [level="7"]>.block-children-container.flex>.block-children-left-border {
            opacity: 0.42;
            background-color: rgb(61, 90, 255);
        }

        .block-children [level="8"]>.block-children-container.flex>.block-children-left-border {
            opacity: 0.42;
            background-color: rgb(0, 255, 242);
        }
        .block-children [level="9"]>.block-children-container.flex>.block-children-left-border {
            opacity: 0.42;
            background-color: rgb(32, 255, 125);
        }
        .block-children [level="10"]>.block-children-container.flex>.block-children-left-border {
            opacity: 0.42;
            background-color: rgb(44, 155, 0);
        }

    /*  display level of indentation */
    /*  .block-children [level="2"]>.block-children-container.flex>.block-children-left-border::after {
            content: "2";
            font-size: 11px;
            color: white;
            display: inline-block;
            position: relative;
            top: 50%;
            left: 5px;
        }
        .block-children [level="3"]>.block-children-container.flex>.block-children-left-border::after {
            content: "3";
            font-size: 11px;
            color: white;
            display: inline-block;
            position: relative;
            top: 50%;
            left: 5px;
        }
        .block-children [level="4"]>.block-children-container.flex>.block-children-left-border::after {
            content: "4";
            font-size: 11px;
            color: white;
            display: inline-block;
            position: relative;
            top: 50%;
            left: 5px;
        } 
         */
    /* --------------------------------------colorful indent end */

    /* ===== columns ========== */
        .ls-block[data-refs-self*="columns-2"]>.block-children-container.flex>.block-children.w-full {
            column-count: 2;
        }
        .ls-block[data-refs-self*="columns-3"]>.block-children-container.flex>.block-children.w-full {
            column-count: 3
        }
        .ls-block[data-refs-self*="columns-4"]>.block-children-container.flex>.block-children.w-full {
            column-count: 4
        }
        .ls-block[data-refs-self*="columns-5"]>.block-children-container.flex>.block-children.w-full {
            column-count: 5
        }
        .ls-block[data-refs-self*="columns-6"]>.block-children-container.flex>.block-children.w-full {
            column-count: 6
        }
    /*===========================================================*/

    /*===========================================================*/
    /* WIP css eisenhower matrix by cannibalox v20220511 -------*/

        [data-refs-self*="eisenhower-matrix"] {
            --eisen-caption-color: #fff;
            --eisen-caption-bg: #0000;
            --eisen-scrollbar-thumb: #f9f9f99e;
            --eisen-scrollbar-track: #0000;
            --eisen-outercaption-color: #979797b8;
            --eisen-todo-bgcolor: #4bad003f;
            --eisen-decide-bgcolor: #0068be5e;
            --eisen-delegate-bgcolor: #bf830054;
            --eisen-eliminate-bgcolor: #9c003e57;
            --eisen-bullet-color: #d9d9d9;
            --eisen-clover-borderstyle: none; /*eg: 3px solid white */
        }

        /* optionnal : add captions around the diagram */

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children:before {
            content: "↑ IMPORTANT";
            position: absolute;
            color: var(--eisen-outercaption-color);
            font-size: 10px;
            left: 45%;
            top: -1rem;
        }

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children:after {
            content: "URGENT ←";
            position: absolute;
            color: var(--eisen-outercaption-color);
            font-size: 10px;
            left: -1rem;
            top: 48%;
        }

        div[data-refs-self*="eisenhower-matrix"]:before {
            content: "↓ NOT IMPORTANT";
            position: absolute;
            color: var(--eisen-outercaption-color);
            font-size: 10px;
            left: 46%;
            bottom: -0.5rem;
        }

        div[data-refs-self*="eisenhower-matrix"]:after {
            content: "→ NOT URGENT";
            position: absolute;
            color: var(--eisen-outercaption-color);
            font-size: 10px;
            right: -2rem;
            top: 50%;
        }


        /* blocks / col */

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>div.ls-block {
            display: inline-block;
            width: 46%;
            overflow: auto;
            margin: 5px;
            height: 18rem;
        }


        /* clover section styling */

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block {
            border: var(--eisen-clover-borderstyle);
        }

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block:nth-last-child(4) {
            border-radius: 0 2rem 0 2rem;
            background-color: var(--eisen-todo-bgcolor);
        }

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block:nth-last-child(3) {
            border-radius: 2rem 0 2rem 0;
            background-color: var(--eisen-decide-bgcolor);
        }

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block:nth-last-child(2) {
            border-radius: 2rem 0 2rem 0;
            background-color: var(--eisen-delegate-bgcolor);
        }

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block:nth-last-child(1) {
            border-radius: 0 2rem 0 2rem;
            background-color: var(--eisen-eliminate-bgcolor);
        }


        /* clover contents */

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children {
            overflow: auto;
            height: 16rem;
        }

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children .bullet {
            background-color: var(--eisen-bullet-color) !important;
        }

        /* scrollbar for each block */

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children::-webkit-scrollbar-thumb {
            background-color: var(--eisen-scrollbar-thumb);
            border-radius: 0px;
        }

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children::-webkit-scrollbar-track {
            background: var(--eisen-scrollbar-track);
        }


        /* block titles */
        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>div.ls-block>.flex.flex-row>.flex.flex-row>.flex-1>.block-content {
            font-weight: 700;
            font-size: 0.7rem;
            text-align: center;
            margin-left: -1rem;
        }

        /* TODO : update this 
        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>div.ls-block>.flex.flex-row>div>div>.block-content .page-reference {
            background: var(--eisen-caption-bg);
            border-radius: 10px;
            color: var(--eisen-caption-color);
        } */


        /* remove bullet of the block title */
        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>div.ls-block>.flex.flex-row>div>a>.bullet-container>.bullet {
            visibility: hidden;
        }


        /* remove indent line ~ margin-left of table cells */
        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children {
            border: 0;
            margin: 0px !important;
        }

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children {
            border: none;
            margin: 0px 0px 0 30px !important;
        }
        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>div.ls-block>.block-children-container.flex>.block-children .bullet-container:after {
            content: '';
            position: absolute;
            border-radius: 50%;
            width: 6px;
            height: 6px;
            background-color: var(--eisen-bullet-color);
            transition: transform .2s;
            opacity: 1;
        }


        /* fix styling for queries */

        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block .custom-query,
        div[data-refs-self*="eisenhower-matrix"]>.block-children-container.flex>.block-children>.ls-block .block-highlight {
            background-color: transparent;
        }

        div[data-refs-self*="eisenhower-matrix"] {
            font-size: 0.75em
        }


    /* ---------------------------- END OF EISENHOWER MATRIX --- */


    /*===========================================================*/
    /* vismode icon component -----------------------------------*/
    /* - replace utilities tags starting with .v-  ------------- */

        a.tag[data-ref*=".v-"]:before {
            content: "👁";
            font-size: 0.75rem;
            line-height: 0.75rem;
        }

        a.tag[data-ref*=".v-"]:hover:before {
            padding-right: 0.3rem;
        }

        a.tag[data-ref*=".v-"]:hover {
            font-size: 0.75rem;
            line-height: 0.75rem;
        }

        a.tag[data-ref*=".v-kanban"]:before {
            content: "\ec3f";
            font-size: 0.75rem;
            line-height: 0.75rem;
            font-family: tabler-icons;
        }

        a.tag[data-ref*=".v-"] {
            font-size: 0px;
            font-family: iosevka, fira code, consolas, source code pro;
            color: #88e165;
            background-color: #1a2d23;
            border: 1px solid #a1c65d;
            border-radius: 3px;
            padding: 0 2px;
        }


        /* headings */
        .editor-inner .uniline-block:is(.h1,.h2), .ls-block :is(h1,h2) {
            margin: .4em 0;
        }
        .ls-block:is(.h1) {
            font-size: 2rem;
            font-weight: 900;
            color: #fff;
        }

        .ls-block:is(.h2) {
            font-size: 1.5rem;
            font-weight: 700;
            color: #b4b4b4;
        }

        .ls-block[data-refs-self*=".h"]>.flex-1.flex-row>.flex>.block-content a.tag {
            display: none
        }
      /*   div.flex-1 > h1:after,
        div.flex-1 > h2:after {
            content: "";
            display: block;
            border-bottom: 1px solid var(--ls-primary-text-color);
        } */
    /*----------------------------end of vismode icon component--*/

    /*===========================================================*/
    /* numbered lists 0.4 20230120 */
    /* usage : tag parent block with #numlist */

        .ls-block[data-refs-self*="numlist"]>.block-children-container.flex>.block-children>.ls-block {
            counter-increment: lvlNumber;
        }

        .ls-block[data-refs-self*="numlist"]>.block-children-container.flex>.block-children>.ls-block>div>div>a>.bullet-container:before {
            content: counters(lvlNumber, ".") ":";
            position: absolute;
            display: block;
            text-align: end;
        }

        .ls-block[data-refs-self*="numlist"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children>.ls-block {
            counter-increment: sublvlNumber;
        }

        .ls-block[data-refs-self*="numlist"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children>.ls-block>div>div>a>.bullet-container:before {
            content: counters(lvlNumber, ".") "." counters(sublvlNumber, ".") ":";
            position: absolute;
            display: block;
            padding-right: 0.25em;       
        }

        .ls-block[data-refs-self*="numlist"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children>.ls-block>div>div>.block-control {
            width: 2rem !important;
        }

        .ls-block[data-refs-self*="numlist"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children>.ls-block>div>.block-content-wrapper {
            padding-left: 0.25em
        }

        /* hide bullets */

        .ls-block[data-refs-self*="numlist"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children div .bullet-container:before {
            content: "";
        }

        .ls-block[data-refs-self*="numlist"]>.block-children-container.flex>.block-children>.ls-block>div>div>a>.bullet-container>.bullet {
            visibility: hidden;
        }

        .ls-block[data-refs-self*="numlist"]>.block-children-container.flex>.block-children>.ls-block>.block-children-container.flex>.block-children>.ls-block>div>div>a>.bullet-container>.bullet {
            visibility: hidden;
        }

    /*------------------------------------end of numbered lists--*/

    /*===========================================================*/
    /*==== logseq-bars v20210307 start ====== */
    /* resets tag style */

        [data-ref*="bar-"].tag,
        [data-ref*="bar-"].page-ref {
            font-size: 0;
            width: 104px;
            height: 6px;
            margin: 0px 10px;
            padding: 1px 1px;
            display: inline-block;
            text-align: start;
            vertical-align: middle;
            border: 1px solid var(--ls-border-color);
            border-radius: 6px;
            background: #12121287;
            /* optionnal settings for right justification below - uncomment to use
                    /* position: absolute; */
            /* right: 10%; */
        }

        [data-ref*="bar-"]:before {
            content: "";
            height: 4px;
            top: -1px;
            position: relative;
            display: inline-block;
            border-radius: 4px;
            background-image: linear-gradient(to right, red 0px, #fa2 20px, #fffc5f 30px, #00ff62 50px, #22ffed 70px, #002fff 90px);
        }

        [data-ref*="flatbar-"]:before {
            background: red;
        }

        [data-ref*="bar-00"]:before {
            width: 1px;
        }

        [data-ref*="bar-10"]:before {
            width: 10px;
        }

        [data-ref*="bar-20"]:before {
            width: 20px;
        }

        [data-ref*="bar-30"]:before {
            width: 30px;
        }

        [data-ref*="bar-40"]:before {
            width: 40px;
        }

        [data-ref*="bar-50"]:before {
            width: 50px;
        }

        [data-ref*="bar-60"]:before {
            width: 60px;
        }

        [data-ref*="bar-70"]:before {
            width: 70px;
        }

        [data-ref*="bar-80"]:before {
            width: 80px;
        }

        [data-ref*="bar-90"]:before {
            width: 90px;
        }

        [data-ref*="bar-100"]:before {
            width: 100px;
        }


    /*------------------------- logseq-bars v20210307 end ====== */


    /* ============================================================
    *  ls-border v0.2 20220307
    *  create borders around blocks (framed boxes)
    *  usage:   
    *  - tag a block with #.v-self-border to create a box around
    *    the current block
    *  - tag a block with #.v-border-children to create boxes
    *    around the children blocks of the current block
    *  - or combine both with #.v-self-border-children
    *==============================================================*/ 

        [data-refs-self*="self-border"] {
            box-shadow: 2px 2px 3px #0000003b;
            border: 1px solid var(--ls-border-color);
            border-radius: var(--ls-border-radius-medium);
            background-color: var(--ls-primary-background-color);
            margin: 0em 0.5em 0.2em 1em !important;
            padding: 0.5em 1em 0.5em 0em !important;

        }
        [data-refs-self*="border-child"]>.block-children-container.flex>.block-children>.ls-block {
            box-shadow: 2px 2px 3px #0000003b;
            border: 1px solid var(--ls-border-color);
            border-radius: var(--ls-border-radius-low);
            background-color: var(--ls-tertiary-background-color);        
            margin: 0.5em 1em 0.5em 0em !important;
            padding: 0.15em 0em !important;
        }

    /*==== ls-border end ====== */
    
    `);
}
  
// bootstrap
logseq.ready(main).catch(console.error)
