function main () {
   logseq.provideStyle(`
   /* WIP css eisenhower matrix by cannibalox v202100306 */
   [data-refs-self*="eisenhower-matrix"]{
      --eisen-caption-color: #fff;
      --eisen-caption-bg: #0000;
      --eisen-scrollbar-thumb: #f9f9f99e;
      --eisen-scrollbar-track: #0000;
      --eisen-outercaption-color: #979797b8;
      --eisen-todo-bgcolor: #4bad00a8;
      --eisen-decide-bgcolor: #0067beb8;
      --eisen-delegate-bgcolor:#bf8300c7;
      --eisen-eliminate-bgcolor:#9c003ecc;
      --eisen-bullet-color : #d9d9d9;
      --eisen-clover-borderstyle: none; /*eg: 3px solid white */
   }

   /* optionnal : add captions around the diagram */
   div[data-refs-self*="eisenhower-matrix"] > .block-children:before {
      content: "↑ IMPORTANT";
      position: absolute;
      color: var(--eisen-outercaption-color);
      font-size: 10px;
      left: 44%;
      top: 0.5rem;
   }  
   div[data-refs-self*="eisenhower-matrix"] > .block-children:after {
      content: "URGENT ←";
      position: absolute;
      color: var(--eisen-outercaption-color);
      font-size: 10px;
      left: -1rem;
      top: 50%;
   }  
   div[data-refs-self*="eisenhower-matrix"]:before {
      content: "↓ NOT IMPORTANT";
      position: absolute;
      color: var(--eisen-outercaption-color);
      font-size: 10px;
      left: 43%;
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
   div[data-refs-self*="eisenhower-matrix"] > .block-children > div.ls-block {
      display: inline-block;
      width: 46%;
      overflow: hidden;
      margin: 5px;
      height: 18rem;
      }
   /* clover section styling */ 
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block {
      border:var(--eisen-clover-borderstyle);}
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block:nth-last-child(4) 
      {border-radius: 0 2rem 0 2rem; background-color: var(--eisen-todo-bgcolor);}
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block:nth-last-child(3) 
      {border-radius: 2rem 0 2rem 0; background-color: var(--eisen-decide-bgcolor);}
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block:nth-last-child(2) 
      {border-radius: 2rem 0 2rem 0; background-color: var(--eisen-delegate-bgcolor);}
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block:nth-last-child(1) 
      {border-radius: 0 2rem 0 2rem; background-color: var(--eisen-eliminate-bgcolor);}

   /* clover contents */
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block > .block-children {
      overflow: auto;
      height: 16rem;
   }
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block > .block-children .bullet {
      background-color:var(--eisen-bullet-color) !important;
   }

   /* scrollbar for each block */
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block > .block-children::-webkit-scrollbar-thumb {background-color:var(--eisen-scrollbar-thumb); border-radius: 0px;}
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block > .block-children::-webkit-scrollbar-track {background:var(--eisen-scrollbar-track); }

   /* block titles */
      div[data-refs-self*="eisenhower-matrix"] > .block-children > div.ls-block > .flex-1.flex-row > div > .block-content {
         font-weight: 700;
         font-size: 0.7rem;
         text-align: center;
         margin-left: -1rem;
      } 
      div[data-refs-self*="eisenhower-matrix"] > .block-children > div.ls-block > .flex.flex-row > div > div > .block-content .page-reference {
         background:var(--eisen-caption-bg);
         border-radius: 10px;
      } 
      div[data-refs-self*="eisenhower-matrix"] > .block-children > div.ls-block > .flex.flex-row > div > div > .block-content .page-reference {
         color:var(--eisen-caption-color);
      } 
      /* remove bullet of the block title */
      div[data-refs-self*="eisenhower-matrix"] > .block-children > div.ls-block > .flex.flex-row > div > a > .bullet-container > .bullet {
         visibility: hidden ;

      } 

   /* remove indent line ~ margin-left of table cells */
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block > .block-children {
      border: 0;
       margin: 0px !important;
   }
   div[data-refs-self*="eisenhower-matrix"] > .block-children {
      border:none;
       margin: 0px 0px 0 30px !important;
   }
   /* fix styling for queries */
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block .custom-query,
   div[data-refs-self*="eisenhower-matrix"] > .block-children > .ls-block .block-highlight {
      background-color: transparent;
   }
      div[data-refs-self*="eisenhower-matrix"] {font-size: 0.75em}
   /* =============== END OF EISENHOWER MATRIX ===================== */



/* vismode icon component by cannibalox */ 
/* hide tags with .v-       */ 
   a.tag[data-ref*=".v-"]:before {
      content:"👁";
      font-size: 0.75rem; 
      line-height: 0.75rem;
      }
   a.tag[data-ref*=".v-"]:hover:before {
      padding-right:0.3rem;
      }
   a.tag[data-ref*=".v-"]:hover {
      font-size: 0.75rem; 
      line-height: 0.75rem;
      }
   a.tag[data-ref*=".v-"]{
      font-size: 0px; 
      font-family: iosevka, fira code, consolas, source code pro;
      color: #88e165;
      background-color: #1a2d23;
      border: 1px solid #a1c65d; border-radius: 3px;
      padding: 0 2px;
      }
   /* headings */
   .ls-block[data-refs-self*=".h1"] > .flex-1.flex-row > .flex > .block-content > div {
      font-size: 2rem;
      font-weight: 900;
      color: #fff;
   }
   .ls-block[data-refs-self*=".h2"] > .flex-1.flex-row > .flex > .block-content > div {
      font-size: 1.5rem;
      font-weight: 700;
      color: #b4b4b4;
   }
   .ls-block[data-refs-self*=".h"] > .flex-1.flex-row > .flex > .block-content a.tag {display: none}

/* numbered lists 0.3 20210605 */
/* usage : tag parent block with #numlist */

a.tag[data-ref="numlist" i]::before {
  content: "🔢";
  visibility: visible;
}

a.tag[data-ref="numlist" i] {
  visibility: hidden;
  width: 1.5em;
  height: 1.5em;
  white-space: nowrap;
  text-shadow: var(--ct-tag-shadow);
  position: relative;
}

   .ls-block[data-refs-self*="numlist"]
       > .block-children
      > .ls-block {
             counter-increment: lvlNumber;
           }
   .ls-block[data-refs-self*="numlist"] 
    > .block-children 
    > .ls-block > div > div > a > .bullet-container:before {
            content: counters(lvlNumber, ".") ":";
            position: absolute;
          display: block;
   }
   .ls-block[data-refs-self*="numlist"]
       > .block-children
      > .ls-block > .block-children
      > .ls-block {
             counter-increment: sublvlNumber;
           }
   .ls-block[data-refs-self*="numlist"] 
    > .block-children 
    > .ls-block > .block-children > .ls-block > div > div > a > .bullet-container:before {
            content: counters(lvlNumber, ".") "." counters(sublvlNumber, ".") ":";
            position: absolute;
          display: block;
          padding-right: 0.25em;
         width: 40px;
   }
   .ls-block[data-refs-self*="numlist"] 
    > .block-children 
    > .ls-block > .block-children > .ls-block > div > div > .block-control {
         width: 30px !important;
   }
   .ls-block[data-refs-self*="numlist"] 
    > .block-children 
    > .ls-block > .block-children > .ls-block > div > .block-content-wrapper {
         padding-left: 0.25em
   }

   /* hide bullets */
      .ls-block[data-refs-self*="numlist"] 
       > .block-children 
       > .ls-block 
       > .block-children div .bullet-container:before {
         content: "";
      }
      .ls-block[data-refs-self*="numlist"] 
       > .block-children 
       > .ls-block  > div > div > a > .bullet-container > .bullet {
         visibility: hidden;
      }
      .ls-block[data-refs-self*="numlist"] 
       > .block-children 
       > .ls-block  
       > .block-children 
       > .ls-block  > div > div > a > .bullet-container > .bullet {
         visibility: hidden;
      }


/* css columns view for child blocks by cannibalox v20210222 */
/* use: inline tag #kanban, #kanban-small or #kanban-wXXX    */
/* try:  #kanban-w200,#kanban-w300, #kanban-w400             */

a.tag[data-ref="kanban" i]::before {
  content: "🗂";
  visibility: visible;
}
a.tag[data-ref="kanban-bg" i]::before {
  content: "🗂🎨";
  visibility: visible;
}

a.tag[data-ref="kanban"i], [data-ref="kanban-bg" i] {
  visibility: hidden;
  width: 1.5em;
  height: 1.5em;
  white-space: nowrap;
  text-shadow: var(--ct-tag-shadow);
  position: relative;
}

   div[data-refs-self*="kanban"] > .block-children {
      display: inline-flex;
      position: relative;
      overflow-x: auto;
      overflow-y: hidden;
      margin: 10px;
      }
   div[data-refs-self*="kanban"] >.block-children > div {
      display: inline-block;
      width: 400px;
      padding-right: 3px;
      }

   /* wide */
   div[data-refs-self*="kanban-wide"] > .block-children  {
      max-width: 200vw ;
      width: 100%;
      min-width: 92vw;
      left: 50%;
      transform: translate(-50%);
      background-color: var(--ls-secondary-background-color);
      overflow-x: scroll;
      overflow-y: hidden;
      margin: 10px;
      }
   div[data-refs-self*="kanban-wide"] >.block-children > .ls-block {
      display: inline-block;
      min-width: 200px;
      padding-right: 3px;
      font-size: 0.85rem;
      }
   div[data-refs-self*="kanban-wide"] >.block-children > div {
   border-right: 1px solid #fff;
      }

   /* #kanbansmall : smaller font with hover zoom */
   div[data-refs-self*="kanban-small"] > .block-children .block-content {
      font-size: 11px;
      font-weight: 300;
   }
   div[data-refs-self*="kanban-small"] > .block-children .block-content:hover {
      font-size: 14px !important;
      min-width: 100px;
      margin: 0 10px;
   }
   /* #kanban-w[100-300] : force width of the columns */
   div[data-refs-self*="kanban-w100"] > .block-children .block-content {
      width:100px;
   }
   div[data-refs-self*="kanban-w150"] > .block-children .block-content {
      width:150px;
   }
   div[data-refs-self*="kanban-w200"] > .block-children .block-content {
      width:200px;
   }
   div[data-refs-self*="kanban-w300"] > .block-children .block-content {
      width:300px;
   }
   div[data-refs-self*="kanban-w300"] > .block-children {
      border: 1px solid var(--ls-block-bullet-border-color);
      padding: 10px 0;
   }
   div[data-refs-self*="kanban-w400"] > .block-children .block-content {
      width:380px;
   }

    `,)
}
  
// bootstrap
logseq.ready(main).catch(console.error)
