<template>
  <div class="demo-wrap">
    <div class="page-title">
      <h1 class="title">Color 颜色</h1>
    </div>
    <div class="page-desc">
      <p>整个系统定义的常规颜色</p>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">主色</h2>
      </div>
      <div class="demo-group__desc">
        <p>UI的主要品牌色。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-row class="demo-color-row">
              <he-col :col="24">
                <div class="demo-color-box he-color--primary">
                  <div class="color-desc">
                    <div><span class="color-type">Brand color</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                  <div class="demo-color-sub">
                    <div class="color-sub-item--col9 he-color--primary-light-1"></div>
                    <div class="color-sub-item--col9 he-color--primary-light-2"></div>
                    <div class="color-sub-item--col9 he-color--primary-light-3"></div>
                    <div class="color-sub-item--col9 he-color--primary-light-4"></div>
                    <div class="color-sub-item--col9 he-color--primary-light-5"></div>
                    <div class="color-sub-item--col9 he-color--primary-light-6"></div>
                    <div class="color-sub-item--col9 he-color--primary-light-7"></div>
                    <div class="color-sub-item--col9 he-color--primary-light-8"></div>
                    <div class="color-sub-item--col9 he-color--primary-light-9"></div>
                  </div>
                </div>
              </he-col>
            </he-row>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">辅助色</h2>
      </div>
      <div class="demo-group__desc">
        <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__title">
            <h3 class="item-title">示例项标题</h3>
          </div>
          <div class="demo-item__desc">
            <p>示例项描述</p>
          </div>
          <div class="demo-item__content">
            <he-row :margin="10" class="demo-color-row--col4">
              <he-col :col="6">
                <div class="demo-color-box he-color--info">
                  <div class="color-desc">
                    <div><span class="color-type">Info</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                  <div class="demo-color-sub">
                    <div class="color-sub-item--col2 he-color--info-light"></div>
                    <div class="color-sub-item--col2 he-color--info-lighter"></div>
                  </div>
                </div>
              </he-col>
              <he-col :col="6">
                <div class="demo-color-box he-color--success">
                  <div class="color-desc">
                    <div><span class="color-type">Success</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                  <div class="demo-color-sub">
                    <div class="color-sub-item--col2 he-color--success-light"></div>
                    <div class="color-sub-item--col2 he-color--success-lighter"></div>
                  </div>
                </div>
              </he-col>
              <he-col :col="6">
                <div class="demo-color-box he-color--warning">
                  <div class="color-desc">
                    <div><span class="color-type">Warning</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                  <div class="demo-color-sub">
                    <div class="color-sub-item--col2 he-color--warning-light"></div>
                    <div class="color-sub-item--col2 he-color--warning-lighter"></div>
                  </div>
                </div>
              </he-col>
              <he-col :col="6">
                <div class="demo-color-box he-color--danger">
                  <div class="color-desc">
                    <div><span class="color-type">Danger</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                  <div class="demo-color-sub">
                    <div class="color-sub-item--col2 he-color--danger-light"></div>
                    <div class="color-sub-item--col2 he-color--danger-lighter"></div>
                  </div>
                </div>
              </he-col>
            </he-row>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">中性色</h2>
      </div>
      <div class="demo-group__desc">
        <p>中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-row :margin="10" class="demo-color-row--col4">
              <he-col :col="8">
                <div class="demo-color-box he-color--text-primary">
                  <div class="color-desc">
                    <div><span class="color-type">主要文字</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                  <div class="demo-color-sub">
                    <div class="color-sub-item--col9 he-color--text-primary-light-1"></div>
                    <div class="color-sub-item--col9 he-color--text-primary-light-2"></div>
                    <div class="color-sub-item--col9 he-color--text-primary-light-3"></div>
                    <div class="color-sub-item--col9 he-color--text-primary-light-4"></div>
                    <div class="color-sub-item--col9 he-color--text-primary-light-5"></div>
                    <div class="color-sub-item--col9 he-color--text-primary-light-6"></div>
                    <div class="color-sub-item--col9 he-color--text-primary-light-7"></div>
                    <div class="color-sub-item--col9 he-color--text-primary-light-8"></div>
                    <div class="color-sub-item--col9 he-color--text-primary-light-9"></div>
                  </div>
                </div>
                <div class="demo-color-box--one-row he-color--text-regular">
                  <div class="color-desc">
                    <div><span class="color-type">常规文字</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                </div>
                <div class="demo-color-box--one-row he-color--text-secondary">
                  <div class="color-desc">
                    <div><span class="color-type">次要文字</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                </div>
                <div class="demo-color-box--one-row he-color--text-placeholder">
                  <div class="color-desc">
                    <div><span class="color-type">占位文字</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                </div>
              </he-col>
              <he-col :col="8">
                <div class="demo-color-box--one-row he-color--border-base">
                  <div class="color-desc color-desc--text-dark">
                    <div><span class="color-type">一级边框</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                </div>
                <div class="demo-color-box--one-row he-color--border-light">
                  <div class="color-desc color-desc--text-dark">
                    <div><span class="color-type">二级边框</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                </div>
                <div class="demo-color-box--one-row he-color--border-lighter">
                  <div class="color-desc color-desc--text-dark">
                    <div><span class="color-type">三级边框</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                </div>
                <div class="demo-color-box--one-row he-color--border-extra-light">
                  <div class="color-desc color-desc--text-dark">
                    <div><span class="color-type">四级边框</span></div>
                    <div><span class="color-value">#409EFF</span></div>
                  </div>
                </div>
              </he-col>
              <he-col :col="8">
                <div class="demo-color-box--one-row he-color--black">
                  <div class="color-desc color-desc">
                    <div><span class="color-type">纯黑</span></div>
                    <div><span class="color-value">#000</span></div>
                  </div>
                </div>
                <div class="demo-color-box--one-row demo-color-box--border he-color--white">
                  <div class="color-desc color-desc--text-dark">
                    <div><span class="color-type">纯白</span></div>
                    <div><span class="color-value">#fff</span></div>
                  </div>
                </div>
                <div class="demo-color-box--one-row demo-color-box--border demo-color-box--transparent he-color--transparent">
                  <div class="color-desc color-desc--text-dark">
                    <div><span class="color-type">透明</span></div>
                    <div><span class="color-value">transparent</span></div>
                  </div>
                </div>
              </he-col>
            </he-row>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">有名称的颜色</h2>
      </div>
      <div class="demo-group__desc">
        <p>已知颜色名称的配色。</p>
        <p>颜色名称也称为颜色关键字，像我们熟悉的black表示黑色，white表示白色，blue表示蓝色等。
          实际上，在CSS的颜色定义中，总共有147种颜色关键字，所有者147种颜色名字均取自X Windows 系统，X 颜色名， 所以即使这147个颜色名看上去不是很标准，支持也是非常不错的。</p>
        <p>需要注意的是，在IE下，关于灰色，其中的字母"e"是不认的，它只认gray中的"a"而不认grey中的"e"。 但实际上gray与grey的颜色值是一样的，只是命名不同而已。
          <strong>所以IE浏览器下，CSS3中的颜色名实际上只有140个，而不是147个。</strong></p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__desc">
            <p>按颜色名称排序</p>
          </div>
          <div class="demo-item__content">
            <div class="demo-color-box--named-color">
              <div class="demo-color-sub--named" style="background-color: aliceBlue">aliceBlue</div>
              <div class="demo-color-sub--named" style="background-color: antiqueWhite">antiqueWhite</div>
              <div class="demo-color-sub--named" style="background-color: aqua">aqua</div>
              <div class="demo-color-sub--named" style="background-color: aquaMarine">aquaMarine</div>
              <div class="demo-color-sub--named" style="background-color: azure">azure</div>
              <div class="demo-color-sub--named" style="background-color: beige">beige</div>
              <div class="demo-color-sub--named" style="background-color: bisque">bisque</div>
              <div class="demo-color-sub--named" style="background-color: black">black</div>
              <div class="demo-color-sub--named" style="background-color: blanchedAlmond">blanchedAlmond</div>
              <div class="demo-color-sub--named" style="background-color: blue">blue</div>
              <div class="demo-color-sub--named" style="background-color: blueViolet">blueViolet</div>
              <div class="demo-color-sub--named" style="background-color: brown">brown</div>
              <div class="demo-color-sub--named" style="background-color: burlyWood">burlyWood</div>
              <div class="demo-color-sub--named" style="background-color: cadetBlue">cadetBlue</div>
              <div class="demo-color-sub--named" style="background-color: chartreuse">chartreuse</div>
              <div class="demo-color-sub--named" style="background-color: chocolate">chocolate</div>
              <div class="demo-color-sub--named" style="background-color: coral">coral</div>
              <div class="demo-color-sub--named" style="background-color: cornflowerBlue">cornflowerBlue</div>
              <div class="demo-color-sub--named" style="background-color: cornsilk">cornsilk</div>
              <div class="demo-color-sub--named" style="background-color: crimson">crimson</div>
              <div class="demo-color-sub--named" style="background-color: cyan">cyan</div>
              <div class="demo-color-sub--named" style="background-color: darkBlue">darkBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkCyan">darkCyan</div>
              <div class="demo-color-sub--named" style="background-color: darkGoldenRod">darkGoldenRod</div>
              <div class="demo-color-sub--named" style="background-color: darkGray">darkGray</div>
              <div class="demo-color-sub--named" style="background-color: darkGreen">darkGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkGrey">darkGrey</div>
              <div class="demo-color-sub--named" style="background-color: darkKhaki">darkKhaki</div>
              <div class="demo-color-sub--named" style="background-color: darkMagenta">darkMagenta</div>
              <div class="demo-color-sub--named" style="background-color: darkOliveGreen">darkOliveGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkOrange">darkOrange</div>
              <div class="demo-color-sub--named" style="background-color: darkOrchid">darkOrchid</div>
              <div class="demo-color-sub--named" style="background-color: darkRed">darkRed</div>
              <div class="demo-color-sub--named" style="background-color: darkSalmon">darkSalmon</div>
              <div class="demo-color-sub--named" style="background-color: darkSeaGreen">darkSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateBlue">darkSlateBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateGray">darkSlateGray</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateGrey">darkSlateGrey</div>
              <div class="demo-color-sub--named" style="background-color: darkTurquoise">darkTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: darkViolet">darkViolet</div>
              <div class="demo-color-sub--named" style="background-color: deepPink">deepPink</div>
              <div class="demo-color-sub--named" style="background-color: deepSkyBlue">deepSkyBlue</div>
              <div class="demo-color-sub--named" style="background-color: dimGray">dimGray</div>
              <div class="demo-color-sub--named" style="background-color: dimGrey">dimGrey</div>
              <div class="demo-color-sub--named" style="background-color: dodgerBlue">dodgerBlue</div>
              <div class="demo-color-sub--named" style="background-color: fireBrick">fireBrick</div>
              <div class="demo-color-sub--named" style="background-color: floralWhite">floralWhite</div>
              <div class="demo-color-sub--named" style="background-color: forestGreen">forestGreen</div>
              <div class="demo-color-sub--named" style="background-color: fuchsia">fuchsia</div>
              <div class="demo-color-sub--named" style="background-color: gainsboro">gainsboro</div>
              <div class="demo-color-sub--named" style="background-color: ghostWhite">ghostWhite</div>
              <div class="demo-color-sub--named" style="background-color: gold">gold</div>
              <div class="demo-color-sub--named" style="background-color: goldenRod">goldenRod</div>
              <div class="demo-color-sub--named" style="background-color: gray">gray</div>
              <div class="demo-color-sub--named" style="background-color: green">green</div>
              <div class="demo-color-sub--named" style="background-color: greenYellow">greenYellow</div>
              <div class="demo-color-sub--named" style="background-color: grey">grey</div>
              <div class="demo-color-sub--named" style="background-color: honeyDew">honeyDew</div>
              <div class="demo-color-sub--named" style="background-color: hotPink">hotPink</div>
              <div class="demo-color-sub--named" style="background-color: indianRed">indianRed</div>
              <div class="demo-color-sub--named" style="background-color: indigo">indigo</div>
              <div class="demo-color-sub--named" style="background-color: ivory">ivory</div>
              <div class="demo-color-sub--named" style="background-color: khaki">khaki</div>
              <div class="demo-color-sub--named" style="background-color: lavender">lavender</div>
              <div class="demo-color-sub--named" style="background-color: lavenderBlush">lavenderBlush</div>
              <div class="demo-color-sub--named" style="background-color: lawnGreen">lawnGreen</div>
              <div class="demo-color-sub--named" style="background-color: lemonChiffon">lemonChiffon</div>
              <div class="demo-color-sub--named" style="background-color: lightBlue">lightBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightCoral">lightCoral</div>
              <div class="demo-color-sub--named" style="background-color: lightCyan">lightCyan</div>
              <div class="demo-color-sub--named" style="background-color: lightGoldenRodYellow">lightGoldenRodYellow</div>
              <div class="demo-color-sub--named" style="background-color: lightGray">lightGray</div>
              <div class="demo-color-sub--named" style="background-color: lightGreen">lightGreen</div>
              <div class="demo-color-sub--named" style="background-color: lightGrey">lightGrey</div>
              <div class="demo-color-sub--named" style="background-color: lightPink">lightPink</div>
              <div class="demo-color-sub--named" style="background-color: lightSalmon">lightSalmon</div>
              <div class="demo-color-sub--named" style="background-color: lightSeaGreen">lightSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: lightSkyBlue">lightSkyBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightSlateGray">lightSlateGray</div>
              <div class="demo-color-sub--named" style="background-color: lightSlateGrey">lightSlateGrey</div>
              <div class="demo-color-sub--named" style="background-color: lightSteelBlue">lightSteelBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightYellow">lightYellow</div>
              <div class="demo-color-sub--named" style="background-color: lime">lime</div>
              <div class="demo-color-sub--named" style="background-color: limeGreen">limeGreen</div>
              <div class="demo-color-sub--named" style="background-color: linen">linen</div>
              <div class="demo-color-sub--named" style="background-color: magenta">magenta</div>
              <div class="demo-color-sub--named" style="background-color: maroon">maroon</div>
              <div class="demo-color-sub--named" style="background-color: mediumAquaMarine">mediumAquaMarine</div>
              <div class="demo-color-sub--named" style="background-color: mediumBlue">mediumBlue</div>
              <div class="demo-color-sub--named" style="background-color: mediumOrchid">mediumOrchid</div>
              <div class="demo-color-sub--named" style="background-color: mediumPurple">mediumPurple</div>
              <div class="demo-color-sub--named" style="background-color: mediumSeaGreen">mediumSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: mediumSlateBlue">mediumSlateBlue</div>
              <div class="demo-color-sub--named" style="background-color: mediumSpringGreen">mediumSpringGreen</div>
              <div class="demo-color-sub--named" style="background-color: mediumTurquoise">mediumTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: mediumVioletRed">mediumVioletRed</div>
              <div class="demo-color-sub--named" style="background-color: midnightBlue">midnightBlue</div>
              <div class="demo-color-sub--named" style="background-color: mintCream">mintCream</div>
              <div class="demo-color-sub--named" style="background-color: mistyRose">mistyRose</div>
              <div class="demo-color-sub--named" style="background-color: moccasin">moccasin</div>
              <div class="demo-color-sub--named" style="background-color: navajoWhite">navajoWhite</div>
              <div class="demo-color-sub--named" style="background-color: navy">navy</div>
              <div class="demo-color-sub--named" style="background-color: oldlace">oldlace</div>
              <div class="demo-color-sub--named" style="background-color: olive">olive</div>
              <div class="demo-color-sub--named" style="background-color: oliveDrab">oliveDrab</div>
              <div class="demo-color-sub--named" style="background-color: orange">orange</div>
              <div class="demo-color-sub--named" style="background-color: orangeRed">orangeRed</div>
              <div class="demo-color-sub--named" style="background-color: orchid">orchid</div>
              <div class="demo-color-sub--named" style="background-color: paleGoldenRod">paleGoldenRod</div>
              <div class="demo-color-sub--named" style="background-color: paleGreen">paleGreen</div>
              <div class="demo-color-sub--named" style="background-color: paleTurquoise">paleTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: paleVioletRed">paleVioletRed</div>
              <div class="demo-color-sub--named" style="background-color: papayaWhip">papayaWhip</div>
              <div class="demo-color-sub--named" style="background-color: peachPuff">peachPuff</div>
              <div class="demo-color-sub--named" style="background-color: peru">peru</div>
              <div class="demo-color-sub--named" style="background-color: pink">pink</div>
              <div class="demo-color-sub--named" style="background-color: plum">plum</div>
              <div class="demo-color-sub--named" style="background-color: powderBlue">powderBlue</div>
              <div class="demo-color-sub--named" style="background-color: purple">purple</div>
              <div class="demo-color-sub--named" style="background-color: red">red</div>
              <div class="demo-color-sub--named" style="background-color: rosyBrown">rosyBrown</div>
              <div class="demo-color-sub--named" style="background-color: royalBlue">royalBlue</div>
              <div class="demo-color-sub--named" style="background-color: saddleBrown">saddleBrown</div>
              <div class="demo-color-sub--named" style="background-color: salmon">salmon</div>
              <div class="demo-color-sub--named" style="background-color: sandyBrown">sandyBrown</div>
              <div class="demo-color-sub--named" style="background-color: seaGreen">seaGreen</div>
              <div class="demo-color-sub--named" style="background-color: seaShell">seaShell</div>
              <div class="demo-color-sub--named" style="background-color: sienna">sienna</div>
              <div class="demo-color-sub--named" style="background-color: silver">silver</div>
              <div class="demo-color-sub--named" style="background-color: skyBlue">skyBlue</div>
              <div class="demo-color-sub--named" style="background-color: slateBlue">slateBlue</div>
              <div class="demo-color-sub--named" style="background-color: slateGray">slateGray</div>
              <div class="demo-color-sub--named" style="background-color: slateGrey">slateGrey</div>
              <div class="demo-color-sub--named" style="background-color: snow">snow</div>
              <div class="demo-color-sub--named" style="background-color: springGreen">springGreen</div>
              <div class="demo-color-sub--named" style="background-color: steelBlue">steelBlue</div>
              <div class="demo-color-sub--named" style="background-color: tan">tan</div>
              <div class="demo-color-sub--named" style="background-color: teal">teal</div>
              <div class="demo-color-sub--named" style="background-color: thistle">thistle</div>
              <div class="demo-color-sub--named" style="background-color: tomato">tomato</div>
              <div class="demo-color-sub--named" style="background-color: turquoise">turquoise</div>
              <div class="demo-color-sub--named" style="background-color: violet">violet</div>
              <div class="demo-color-sub--named" style="background-color: wheat">wheat</div>
              <div class="demo-color-sub--named" style="background-color: white">white</div>
              <div class="demo-color-sub--named" style="background-color: whiteSmoke">whiteSmoke</div>
              <div class="demo-color-sub--named" style="background-color: yellow">yellow</div>
              <div class="demo-color-sub--named" style="background-color: yellowGreen">yellowGreen</div>
            </div>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__desc">
            <p>按十六进制值排序</p>
          </div>
          <div class="demo-item__content">
            <div class="demo-color-box--named-color">
              <div class="demo-color-sub--named" style="background-color: white">white</div>
              <div class="demo-color-sub--named" style="background-color: ivory">ivory</div>
              <div class="demo-color-sub--named" style="background-color: lightYellow">lightYellow</div>
              <div class="demo-color-sub--named" style="background-color: yellow">yellow</div>
              <div class="demo-color-sub--named" style="background-color: snow">snow</div>
              <div class="demo-color-sub--named" style="background-color: floralWhite">floralWhite</div>
              <div class="demo-color-sub--named" style="background-color: lemonChiffon">lemonChiffon</div>
              <div class="demo-color-sub--named" style="background-color: cornsilk">cornsilk</div>
              <div class="demo-color-sub--named" style="background-color: seaShell">seaShell</div>
              <div class="demo-color-sub--named" style="background-color: lavenderBlush">lavenderBlush</div>
              <div class="demo-color-sub--named" style="background-color: papayaWhip">papayaWhip</div>
              <div class="demo-color-sub--named" style="background-color: blanchedAlmond">blanchedAlmond</div>
              <div class="demo-color-sub--named" style="background-color: mistyRose">mistyRose</div>
              <div class="demo-color-sub--named" style="background-color: bisque">bisque</div>
              <div class="demo-color-sub--named" style="background-color: moccasin">moccasin</div>
              <div class="demo-color-sub--named" style="background-color: navajoWhite">navajoWhite</div>
              <div class="demo-color-sub--named" style="background-color: peachPuff">peachPuff</div>
              <div class="demo-color-sub--named" style="background-color: gold">gold</div>
              <div class="demo-color-sub--named" style="background-color: pink">pink</div>
              <div class="demo-color-sub--named" style="background-color: lightPink">lightPink</div>
              <div class="demo-color-sub--named" style="background-color: orange">orange</div>
              <div class="demo-color-sub--named" style="background-color: lightSalmon">lightSalmon</div>
              <div class="demo-color-sub--named" style="background-color: darkOrange">darkOrange</div>
              <div class="demo-color-sub--named" style="background-color: coral">coral</div>
              <div class="demo-color-sub--named" style="background-color: hotPink">hotPink</div>
              <div class="demo-color-sub--named" style="background-color: tomato">tomato</div>
              <div class="demo-color-sub--named" style="background-color: orangeRed">orangeRed</div>
              <div class="demo-color-sub--named" style="background-color: deepPink">deepPink</div>
              <div class="demo-color-sub--named" style="background-color: fuchsia">fuchsia</div>
              <div class="demo-color-sub--named" style="background-color: magenta">magenta</div>
              <div class="demo-color-sub--named" style="background-color: red">red</div>
              <div class="demo-color-sub--named" style="background-color: oldlace">oldlace</div>
              <div class="demo-color-sub--named" style="background-color: lightGoldenRodYellow">lightGoldenRodYellow</div>
              <div class="demo-color-sub--named" style="background-color: linen">linen</div>
              <div class="demo-color-sub--named" style="background-color: antiqueWhite">antiqueWhite</div>
              <div class="demo-color-sub--named" style="background-color: salmon">salmon</div>
              <div class="demo-color-sub--named" style="background-color: ghostWhite">ghostWhite</div>
              <div class="demo-color-sub--named" style="background-color: mintCream">mintCream</div>
              <div class="demo-color-sub--named" style="background-color: whiteSmoke">whiteSmoke</div>
              <div class="demo-color-sub--named" style="background-color: beige">beige</div>
              <div class="demo-color-sub--named" style="background-color: wheat">wheat</div>
              <div class="demo-color-sub--named" style="background-color: sandyBrown">sandyBrown</div>
              <div class="demo-color-sub--named" style="background-color: azure">azure</div>
              <div class="demo-color-sub--named" style="background-color: honeyDew">honeyDew</div>
              <div class="demo-color-sub--named" style="background-color: aliceBlue">aliceBlue</div>
              <div class="demo-color-sub--named" style="background-color: khaki">khaki</div>
              <div class="demo-color-sub--named" style="background-color: lightCoral">lightCoral</div>
              <div class="demo-color-sub--named" style="background-color: paleGoldenRod">paleGoldenRod</div>
              <div class="demo-color-sub--named" style="background-color: violet">violet</div>
              <div class="demo-color-sub--named" style="background-color: darkSalmon">darkSalmon</div>
              <div class="demo-color-sub--named" style="background-color: lavender">lavender</div>
              <div class="demo-color-sub--named" style="background-color: lightCyan">lightCyan</div>
              <div class="demo-color-sub--named" style="background-color: burlyWood">burlyWood</div>
              <div class="demo-color-sub--named" style="background-color: plum">plum</div>
              <div class="demo-color-sub--named" style="background-color: gainsboro">gainsboro</div>
              <div class="demo-color-sub--named" style="background-color: crimson">crimson</div>
              <div class="demo-color-sub--named" style="background-color: paleVioletRed">paleVioletRed</div>
              <div class="demo-color-sub--named" style="background-color: goldenRod">goldenRod</div>
              <div class="demo-color-sub--named" style="background-color: orchid">orchid</div>
              <div class="demo-color-sub--named" style="background-color: thistle">thistle</div>
              <div class="demo-color-sub--named" style="background-color: lightGray">lightGray</div>
              <div class="demo-color-sub--named" style="background-color: lightGrey">lightGrey</div>
              <div class="demo-color-sub--named" style="background-color: tan">tan</div>
              <div class="demo-color-sub--named" style="background-color: chocolate">chocolate</div>
              <div class="demo-color-sub--named" style="background-color: peru">peru</div>
              <div class="demo-color-sub--named" style="background-color: indianRed">indianRed</div>
              <div class="demo-color-sub--named" style="background-color: mediumVioletRed">mediumVioletRed</div>
              <div class="demo-color-sub--named" style="background-color: silver">silver</div>
              <div class="demo-color-sub--named" style="background-color: darkKhaki">darkKhaki</div>
              <div class="demo-color-sub--named" style="background-color: rosyBrown">rosyBrown</div>
              <div class="demo-color-sub--named" style="background-color: mediumOrchid">mediumOrchid</div>
              <div class="demo-color-sub--named" style="background-color: darkGoldenRod">darkGoldenRod</div>
              <div class="demo-color-sub--named" style="background-color: fireBrick">fireBrick</div>
              <div class="demo-color-sub--named" style="background-color: powderBlue">powderBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightSteelBlue">lightSteelBlue</div>
              <div class="demo-color-sub--named" style="background-color: paleTurquoise">paleTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: greenYellow">greenYellow</div>
              <div class="demo-color-sub--named" style="background-color: lightBlue">lightBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkGray">darkGray</div>
              <div class="demo-color-sub--named" style="background-color: darkGrey">darkGrey</div>
              <div class="demo-color-sub--named" style="background-color: brown">brown</div>
              <div class="demo-color-sub--named" style="background-color: sienna">sienna</div>
              <div class="demo-color-sub--named" style="background-color: yellowGreen">yellowGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkOrchid">darkOrchid</div>
              <div class="demo-color-sub--named" style="background-color: paleGreen">paleGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkViolet">darkViolet</div>
              <div class="demo-color-sub--named" style="background-color: mediumPurple">mediumPurple</div>
              <div class="demo-color-sub--named" style="background-color: lightGreen">lightGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkSeaGreen">darkSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: saddleBrown">saddleBrown</div>
              <div class="demo-color-sub--named" style="background-color: darkMagenta">darkMagenta</div>
              <div class="demo-color-sub--named" style="background-color: darkRed">darkRed</div>
              <div class="demo-color-sub--named" style="background-color: blueViolet">blueViolet</div>
              <div class="demo-color-sub--named" style="background-color: lightSkyBlue">lightSkyBlue</div>
              <div class="demo-color-sub--named" style="background-color: skyBlue">skyBlue</div>
              <div class="demo-color-sub--named" style="background-color: gray">gray</div>
              <div class="demo-color-sub--named" style="background-color: grey">grey</div>
              <div class="demo-color-sub--named" style="background-color: olive">olive</div>
              <div class="demo-color-sub--named" style="background-color: purple">purple</div>
              <div class="demo-color-sub--named" style="background-color: maroon">maroon</div>
              <div class="demo-color-sub--named" style="background-color: aquamarine">aquamarine</div>
              <div class="demo-color-sub--named" style="background-color: chartreuse">chartreuse</div>
              <div class="demo-color-sub--named" style="background-color: lawnGreen">lawnGreen</div>
              <div class="demo-color-sub--named" style="background-color: mediumSlateBlue">mediumSlateBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightSlateGray">lightSlateGray</div>
              <div class="demo-color-sub--named" style="background-color: lightSlateGrey">lightSlateGrey</div>
              <div class="demo-color-sub--named" style="background-color: slateGray">slateGray</div>
              <div class="demo-color-sub--named" style="background-color: slateGrey">slateGrey</div>
              <div class="demo-color-sub--named" style="background-color: oliveDrab">oliveDrab</div>
              <div class="demo-color-sub--named" style="background-color: slateBlue">slateBlue</div>
              <div class="demo-color-sub--named" style="background-color: dimGray">dimGray</div>
              <div class="demo-color-sub--named" style="background-color: dimGrey">dimGrey</div>
              <div class="demo-color-sub--named" style="background-color: mediumAquaMarine">mediumAquaMarine</div>
              <div class="demo-color-sub--named" style="background-color: cornflowerBlue">cornflowerBlue</div>
              <div class="demo-color-sub--named" style="background-color: cadetBlue">cadetBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkOliveGreen">darkOliveGreen</div>
              <div class="demo-color-sub--named" style="background-color: indigo">indigo</div>
              <div class="demo-color-sub--named" style="background-color: mediumTurquoise">mediumTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateBlue">darkSlateBlue</div>
              <div class="demo-color-sub--named" style="background-color: steelBlue">steelBlue</div>
              <div class="demo-color-sub--named" style="background-color: royalBlue">royalBlue</div>
              <div class="demo-color-sub--named" style="background-color: turquoise">turquoise</div>
              <div class="demo-color-sub--named" style="background-color: mediumSeaGreen">mediumSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: limeGreen">limeGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateGray">darkSlateGray</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateGrey">darkSlateGrey</div>
              <div class="demo-color-sub--named" style="background-color: seaGreen">seaGreen</div>
              <div class="demo-color-sub--named" style="background-color: forestGreen">forestGreen</div>
              <div class="demo-color-sub--named" style="background-color: lightSeaGreen">lightSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: dodgerBlue">dodgerBlue</div>
              <div class="demo-color-sub--named" style="background-color: midnightBlue">midnightBlue</div>
              <div class="demo-color-sub--named" style="background-color: aqua">aqua</div>
              <div class="demo-color-sub--named" style="background-color: cyan">cyan</div>
              <div class="demo-color-sub--named" style="background-color: springGreen">springGreen</div>
              <div class="demo-color-sub--named" style="background-color: lime">lime</div>
              <div class="demo-color-sub--named" style="background-color: mediumSpringGreen">mediumSpringGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkTurquoise">darkTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: deepSkyBlue">deepSkyBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkCyan">darkCyan</div>
              <div class="demo-color-sub--named" style="background-color: teal">teal</div>
              <div class="demo-color-sub--named" style="background-color: green">green</div>
              <div class="demo-color-sub--named" style="background-color: darkGreen">darkGreen</div>
              <div class="demo-color-sub--named" style="background-color: blue">blue</div>
              <div class="demo-color-sub--named" style="background-color: mediumBlue">mediumBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkBlue">darkBlue</div>
              <div class="demo-color-sub--named" style="background-color: navy">navy</div>
              <div class="demo-color-sub--named" style="background-color: black">black</div>
            </div>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__desc">
            <p>竖向展示</p>
          </div>
          <div class="demo-item__content">
            <div class="demo-color-box--named-color vertical">
              <div class="demo-color-sub--named" style="background-color: aliceBlue">aliceBlue</div>
              <div class="demo-color-sub--named" style="background-color: antiqueWhite">antiqueWhite</div>
              <div class="demo-color-sub--named" style="background-color: aqua">aqua</div>
              <div class="demo-color-sub--named" style="background-color: aquaMarine">aquaMarine</div>
              <div class="demo-color-sub--named" style="background-color: azure">azure</div>
              <div class="demo-color-sub--named" style="background-color: beige">beige</div>
              <div class="demo-color-sub--named" style="background-color: bisque">bisque</div>
              <div class="demo-color-sub--named" style="background-color: black">black</div>
              <div class="demo-color-sub--named" style="background-color: blanchedAlmond">blanchedAlmond</div>
              <div class="demo-color-sub--named" style="background-color: blue">blue</div>
              <div class="demo-color-sub--named" style="background-color: blueViolet">blueViolet</div>
              <div class="demo-color-sub--named" style="background-color: brown">brown</div>
              <div class="demo-color-sub--named" style="background-color: burlyWood">burlyWood</div>
              <div class="demo-color-sub--named" style="background-color: cadetBlue">cadetBlue</div>
              <div class="demo-color-sub--named" style="background-color: chartreuse">chartreuse</div>
              <div class="demo-color-sub--named" style="background-color: chocolate">chocolate</div>
              <div class="demo-color-sub--named" style="background-color: coral">coral</div>
              <div class="demo-color-sub--named" style="background-color: cornflowerBlue">cornflowerBlue</div>
              <div class="demo-color-sub--named" style="background-color: cornsilk">cornsilk</div>
              <div class="demo-color-sub--named" style="background-color: crimson">crimson</div>
              <div class="demo-color-sub--named" style="background-color: cyan">cyan</div>
              <div class="demo-color-sub--named" style="background-color: darkBlue">darkBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkCyan">darkCyan</div>
              <div class="demo-color-sub--named" style="background-color: darkGoldenRod">darkGoldenRod</div>
              <div class="demo-color-sub--named" style="background-color: darkGray">darkGray</div>
              <div class="demo-color-sub--named" style="background-color: darkGreen">darkGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkGrey">darkGrey</div>
              <div class="demo-color-sub--named" style="background-color: darkKhaki">darkKhaki</div>
              <div class="demo-color-sub--named" style="background-color: darkMagenta">darkMagenta</div>
              <div class="demo-color-sub--named" style="background-color: darkOliveGreen">darkOliveGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkOrange">darkOrange</div>
              <div class="demo-color-sub--named" style="background-color: darkOrchid">darkOrchid</div>
              <div class="demo-color-sub--named" style="background-color: darkRed">darkRed</div>
              <div class="demo-color-sub--named" style="background-color: darkSalmon">darkSalmon</div>
              <div class="demo-color-sub--named" style="background-color: darkSeaGreen">darkSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateBlue">darkSlateBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateGray">darkSlateGray</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateGrey">darkSlateGrey</div>
              <div class="demo-color-sub--named" style="background-color: darkTurquoise">darkTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: darkViolet">darkViolet</div>
              <div class="demo-color-sub--named" style="background-color: deepPink">deepPink</div>
              <div class="demo-color-sub--named" style="background-color: deepSkyBlue">deepSkyBlue</div>
              <div class="demo-color-sub--named" style="background-color: dimGray">dimGray</div>
              <div class="demo-color-sub--named" style="background-color: dimGrey">dimGrey</div>
              <div class="demo-color-sub--named" style="background-color: dodgerBlue">dodgerBlue</div>
              <div class="demo-color-sub--named" style="background-color: fireBrick">fireBrick</div>
              <div class="demo-color-sub--named" style="background-color: floralWhite">floralWhite</div>
              <div class="demo-color-sub--named" style="background-color: forestGreen">forestGreen</div>
              <div class="demo-color-sub--named" style="background-color: fuchsia">fuchsia</div>
              <div class="demo-color-sub--named" style="background-color: gainsboro">gainsboro</div>
              <div class="demo-color-sub--named" style="background-color: ghostWhite">ghostWhite</div>
              <div class="demo-color-sub--named" style="background-color: gold">gold</div>
              <div class="demo-color-sub--named" style="background-color: goldenRod">goldenRod</div>
              <div class="demo-color-sub--named" style="background-color: gray">gray</div>
              <div class="demo-color-sub--named" style="background-color: green">green</div>
              <div class="demo-color-sub--named" style="background-color: greenYellow">greenYellow</div>
              <div class="demo-color-sub--named" style="background-color: grey">grey</div>
              <div class="demo-color-sub--named" style="background-color: honeyDew">honeyDew</div>
              <div class="demo-color-sub--named" style="background-color: hotPink">hotPink</div>
              <div class="demo-color-sub--named" style="background-color: indianRed">indianRed</div>
              <div class="demo-color-sub--named" style="background-color: indigo">indigo</div>
              <div class="demo-color-sub--named" style="background-color: ivory">ivory</div>
              <div class="demo-color-sub--named" style="background-color: khaki">khaki</div>
              <div class="demo-color-sub--named" style="background-color: lavender">lavender</div>
              <div class="demo-color-sub--named" style="background-color: lavenderBlush">lavenderBlush</div>
              <div class="demo-color-sub--named" style="background-color: lawnGreen">lawnGreen</div>
              <div class="demo-color-sub--named" style="background-color: lemonChiffon">lemonChiffon</div>
              <div class="demo-color-sub--named" style="background-color: lightBlue">lightBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightCoral">lightCoral</div>
              <div class="demo-color-sub--named" style="background-color: lightCyan">lightCyan</div>
              <div class="demo-color-sub--named" style="background-color: lightGoldenRodYellow">lightGoldenRodYellow</div>
              <div class="demo-color-sub--named" style="background-color: lightGray">lightGray</div>
              <div class="demo-color-sub--named" style="background-color: lightGreen">lightGreen</div>
              <div class="demo-color-sub--named" style="background-color: lightGrey">lightGrey</div>
              <div class="demo-color-sub--named" style="background-color: lightPink">lightPink</div>
              <div class="demo-color-sub--named" style="background-color: lightSalmon">lightSalmon</div>
              <div class="demo-color-sub--named" style="background-color: lightSeaGreen">lightSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: lightSkyBlue">lightSkyBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightSlateGray">lightSlateGray</div>
              <div class="demo-color-sub--named" style="background-color: lightSlateGrey">lightSlateGrey</div>
              <div class="demo-color-sub--named" style="background-color: lightSteelBlue">lightSteelBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightYellow">lightYellow</div>
              <div class="demo-color-sub--named" style="background-color: lime">lime</div>
              <div class="demo-color-sub--named" style="background-color: limeGreen">limeGreen</div>
              <div class="demo-color-sub--named" style="background-color: linen">linen</div>
              <div class="demo-color-sub--named" style="background-color: magenta">magenta</div>
              <div class="demo-color-sub--named" style="background-color: maroon">maroon</div>
              <div class="demo-color-sub--named" style="background-color: mediumAquaMarine">mediumAquaMarine</div>
              <div class="demo-color-sub--named" style="background-color: mediumBlue">mediumBlue</div>
              <div class="demo-color-sub--named" style="background-color: mediumOrchid">mediumOrchid</div>
              <div class="demo-color-sub--named" style="background-color: mediumPurple">mediumPurple</div>
              <div class="demo-color-sub--named" style="background-color: mediumSeaGreen">mediumSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: mediumSlateBlue">mediumSlateBlue</div>
              <div class="demo-color-sub--named" style="background-color: mediumSpringGreen">mediumSpringGreen</div>
              <div class="demo-color-sub--named" style="background-color: mediumTurquoise">mediumTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: mediumVioletRed">mediumVioletRed</div>
              <div class="demo-color-sub--named" style="background-color: midnightBlue">midnightBlue</div>
              <div class="demo-color-sub--named" style="background-color: mintCream">mintCream</div>
              <div class="demo-color-sub--named" style="background-color: mistyRose">mistyRose</div>
              <div class="demo-color-sub--named" style="background-color: moccasin">moccasin</div>
              <div class="demo-color-sub--named" style="background-color: navajoWhite">navajoWhite</div>
              <div class="demo-color-sub--named" style="background-color: navy">navy</div>
              <div class="demo-color-sub--named" style="background-color: oldlace">oldlace</div>
              <div class="demo-color-sub--named" style="background-color: olive">olive</div>
              <div class="demo-color-sub--named" style="background-color: oliveDrab">oliveDrab</div>
              <div class="demo-color-sub--named" style="background-color: orange">orange</div>
              <div class="demo-color-sub--named" style="background-color: orangeRed">orangeRed</div>
              <div class="demo-color-sub--named" style="background-color: orchid">orchid</div>
              <div class="demo-color-sub--named" style="background-color: paleGoldenRod">paleGoldenRod</div>
              <div class="demo-color-sub--named" style="background-color: paleGreen">paleGreen</div>
              <div class="demo-color-sub--named" style="background-color: paleTurquoise">paleTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: paleVioletRed">paleVioletRed</div>
              <div class="demo-color-sub--named" style="background-color: papayaWhip">papayaWhip</div>
              <div class="demo-color-sub--named" style="background-color: peachPuff">peachPuff</div>
              <div class="demo-color-sub--named" style="background-color: peru">peru</div>
              <div class="demo-color-sub--named" style="background-color: pink">pink</div>
              <div class="demo-color-sub--named" style="background-color: plum">plum</div>
              <div class="demo-color-sub--named" style="background-color: powderBlue">powderBlue</div>
              <div class="demo-color-sub--named" style="background-color: purple">purple</div>
              <div class="demo-color-sub--named" style="background-color: red">red</div>
              <div class="demo-color-sub--named" style="background-color: rosyBrown">rosyBrown</div>
              <div class="demo-color-sub--named" style="background-color: royalBlue">royalBlue</div>
              <div class="demo-color-sub--named" style="background-color: saddleBrown">saddleBrown</div>
              <div class="demo-color-sub--named" style="background-color: salmon">salmon</div>
              <div class="demo-color-sub--named" style="background-color: sandyBrown">sandyBrown</div>
              <div class="demo-color-sub--named" style="background-color: seaGreen">seaGreen</div>
              <div class="demo-color-sub--named" style="background-color: seaShell">seaShell</div>
              <div class="demo-color-sub--named" style="background-color: sienna">sienna</div>
              <div class="demo-color-sub--named" style="background-color: silver">silver</div>
              <div class="demo-color-sub--named" style="background-color: skyBlue">skyBlue</div>
              <div class="demo-color-sub--named" style="background-color: slateBlue">slateBlue</div>
              <div class="demo-color-sub--named" style="background-color: slateGray">slateGray</div>
              <div class="demo-color-sub--named" style="background-color: slateGrey">slateGrey</div>
              <div class="demo-color-sub--named" style="background-color: snow">snow</div>
              <div class="demo-color-sub--named" style="background-color: springGreen">springGreen</div>
              <div class="demo-color-sub--named" style="background-color: steelBlue">steelBlue</div>
              <div class="demo-color-sub--named" style="background-color: tan">tan</div>
              <div class="demo-color-sub--named" style="background-color: teal">teal</div>
              <div class="demo-color-sub--named" style="background-color: thistle">thistle</div>
              <div class="demo-color-sub--named" style="background-color: tomato">tomato</div>
              <div class="demo-color-sub--named" style="background-color: turquoise">turquoise</div>
              <div class="demo-color-sub--named" style="background-color: violet">violet</div>
              <div class="demo-color-sub--named" style="background-color: wheat">wheat</div>
              <div class="demo-color-sub--named" style="background-color: white">white</div>
              <div class="demo-color-sub--named" style="background-color: whiteSmoke">whiteSmoke</div>
              <div class="demo-color-sub--named" style="background-color: yellow">yellow</div>
              <div class="demo-color-sub--named" style="background-color: yellowGreen">yellowGreen</div>
            </div>
            <div class="demo-color-box--named-color vertical">
              <div class="demo-color-sub--named" style="background-color: white">white</div>
              <div class="demo-color-sub--named" style="background-color: ivory">ivory</div>
              <div class="demo-color-sub--named" style="background-color: lightYellow">lightYellow</div>
              <div class="demo-color-sub--named" style="background-color: yellow">yellow</div>
              <div class="demo-color-sub--named" style="background-color: snow">snow</div>
              <div class="demo-color-sub--named" style="background-color: floralWhite">floralWhite</div>
              <div class="demo-color-sub--named" style="background-color: lemonChiffon">lemonChiffon</div>
              <div class="demo-color-sub--named" style="background-color: cornsilk">cornsilk</div>
              <div class="demo-color-sub--named" style="background-color: seaShell">seaShell</div>
              <div class="demo-color-sub--named" style="background-color: lavenderBlush">lavenderBlush</div>
              <div class="demo-color-sub--named" style="background-color: papayaWhip">papayaWhip</div>
              <div class="demo-color-sub--named" style="background-color: blanchedAlmond">blanchedAlmond</div>
              <div class="demo-color-sub--named" style="background-color: mistyRose">mistyRose</div>
              <div class="demo-color-sub--named" style="background-color: bisque">bisque</div>
              <div class="demo-color-sub--named" style="background-color: moccasin">moccasin</div>
              <div class="demo-color-sub--named" style="background-color: navajoWhite">navajoWhite</div>
              <div class="demo-color-sub--named" style="background-color: peachPuff">peachPuff</div>
              <div class="demo-color-sub--named" style="background-color: gold">gold</div>
              <div class="demo-color-sub--named" style="background-color: pink">pink</div>
              <div class="demo-color-sub--named" style="background-color: lightPink">lightPink</div>
              <div class="demo-color-sub--named" style="background-color: orange">orange</div>
              <div class="demo-color-sub--named" style="background-color: lightSalmon">lightSalmon</div>
              <div class="demo-color-sub--named" style="background-color: darkOrange">darkOrange</div>
              <div class="demo-color-sub--named" style="background-color: coral">coral</div>
              <div class="demo-color-sub--named" style="background-color: hotPink">hotPink</div>
              <div class="demo-color-sub--named" style="background-color: tomato">tomato</div>
              <div class="demo-color-sub--named" style="background-color: orangeRed">orangeRed</div>
              <div class="demo-color-sub--named" style="background-color: deepPink">deepPink</div>
              <div class="demo-color-sub--named" style="background-color: fuchsia">fuchsia</div>
              <div class="demo-color-sub--named" style="background-color: magenta">magenta</div>
              <div class="demo-color-sub--named" style="background-color: red">red</div>
              <div class="demo-color-sub--named" style="background-color: oldlace">oldlace</div>
              <div class="demo-color-sub--named" style="background-color: lightGoldenRodYellow">lightGoldenRodYellow</div>
              <div class="demo-color-sub--named" style="background-color: linen">linen</div>
              <div class="demo-color-sub--named" style="background-color: antiqueWhite">antiqueWhite</div>
              <div class="demo-color-sub--named" style="background-color: salmon">salmon</div>
              <div class="demo-color-sub--named" style="background-color: ghostWhite">ghostWhite</div>
              <div class="demo-color-sub--named" style="background-color: mintCream">mintCream</div>
              <div class="demo-color-sub--named" style="background-color: whiteSmoke">whiteSmoke</div>
              <div class="demo-color-sub--named" style="background-color: beige">beige</div>
              <div class="demo-color-sub--named" style="background-color: wheat">wheat</div>
              <div class="demo-color-sub--named" style="background-color: sandyBrown">sandyBrown</div>
              <div class="demo-color-sub--named" style="background-color: azure">azure</div>
              <div class="demo-color-sub--named" style="background-color: honeyDew">honeyDew</div>
              <div class="demo-color-sub--named" style="background-color: aliceBlue">aliceBlue</div>
              <div class="demo-color-sub--named" style="background-color: khaki">khaki</div>
              <div class="demo-color-sub--named" style="background-color: lightCoral">lightCoral</div>
              <div class="demo-color-sub--named" style="background-color: paleGoldenRod">paleGoldenRod</div>
              <div class="demo-color-sub--named" style="background-color: violet">violet</div>
              <div class="demo-color-sub--named" style="background-color: darkSalmon">darkSalmon</div>
              <div class="demo-color-sub--named" style="background-color: lavender">lavender</div>
              <div class="demo-color-sub--named" style="background-color: lightCyan">lightCyan</div>
              <div class="demo-color-sub--named" style="background-color: burlyWood">burlyWood</div>
              <div class="demo-color-sub--named" style="background-color: plum">plum</div>
              <div class="demo-color-sub--named" style="background-color: gainsboro">gainsboro</div>
              <div class="demo-color-sub--named" style="background-color: crimson">crimson</div>
              <div class="demo-color-sub--named" style="background-color: paleVioletRed">paleVioletRed</div>
              <div class="demo-color-sub--named" style="background-color: goldenRod">goldenRod</div>
              <div class="demo-color-sub--named" style="background-color: orchid">orchid</div>
              <div class="demo-color-sub--named" style="background-color: thistle">thistle</div>
              <div class="demo-color-sub--named" style="background-color: lightGray">lightGray</div>
              <div class="demo-color-sub--named" style="background-color: lightGrey">lightGrey</div>
              <div class="demo-color-sub--named" style="background-color: tan">tan</div>
              <div class="demo-color-sub--named" style="background-color: chocolate">chocolate</div>
              <div class="demo-color-sub--named" style="background-color: peru">peru</div>
              <div class="demo-color-sub--named" style="background-color: indianRed">indianRed</div>
              <div class="demo-color-sub--named" style="background-color: mediumVioletRed">mediumVioletRed</div>
              <div class="demo-color-sub--named" style="background-color: silver">silver</div>
              <div class="demo-color-sub--named" style="background-color: darkKhaki">darkKhaki</div>
              <div class="demo-color-sub--named" style="background-color: rosyBrown">rosyBrown</div>
              <div class="demo-color-sub--named" style="background-color: mediumOrchid">mediumOrchid</div>
              <div class="demo-color-sub--named" style="background-color: darkGoldenRod">darkGoldenRod</div>
              <div class="demo-color-sub--named" style="background-color: fireBrick">fireBrick</div>
              <div class="demo-color-sub--named" style="background-color: powderBlue">powderBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightSteelBlue">lightSteelBlue</div>
              <div class="demo-color-sub--named" style="background-color: paleTurquoise">paleTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: greenYellow">greenYellow</div>
              <div class="demo-color-sub--named" style="background-color: lightBlue">lightBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkGray">darkGray</div>
              <div class="demo-color-sub--named" style="background-color: darkGrey">darkGrey</div>
              <div class="demo-color-sub--named" style="background-color: brown">brown</div>
              <div class="demo-color-sub--named" style="background-color: sienna">sienna</div>
              <div class="demo-color-sub--named" style="background-color: yellowGreen">yellowGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkOrchid">darkOrchid</div>
              <div class="demo-color-sub--named" style="background-color: paleGreen">paleGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkViolet">darkViolet</div>
              <div class="demo-color-sub--named" style="background-color: mediumPurple">mediumPurple</div>
              <div class="demo-color-sub--named" style="background-color: lightGreen">lightGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkSeaGreen">darkSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: saddleBrown">saddleBrown</div>
              <div class="demo-color-sub--named" style="background-color: darkMagenta">darkMagenta</div>
              <div class="demo-color-sub--named" style="background-color: darkRed">darkRed</div>
              <div class="demo-color-sub--named" style="background-color: blueViolet">blueViolet</div>
              <div class="demo-color-sub--named" style="background-color: lightSkyBlue">lightSkyBlue</div>
              <div class="demo-color-sub--named" style="background-color: skyBlue">skyBlue</div>
              <div class="demo-color-sub--named" style="background-color: gray">gray</div>
              <div class="demo-color-sub--named" style="background-color: grey">grey</div>
              <div class="demo-color-sub--named" style="background-color: olive">olive</div>
              <div class="demo-color-sub--named" style="background-color: purple">purple</div>
              <div class="demo-color-sub--named" style="background-color: maroon">maroon</div>
              <div class="demo-color-sub--named" style="background-color: aquamarine">aquamarine</div>
              <div class="demo-color-sub--named" style="background-color: chartreuse">chartreuse</div>
              <div class="demo-color-sub--named" style="background-color: lawnGreen">lawnGreen</div>
              <div class="demo-color-sub--named" style="background-color: mediumSlateBlue">mediumSlateBlue</div>
              <div class="demo-color-sub--named" style="background-color: lightSlateGray">lightSlateGray</div>
              <div class="demo-color-sub--named" style="background-color: lightSlateGrey">lightSlateGrey</div>
              <div class="demo-color-sub--named" style="background-color: slateGray">slateGray</div>
              <div class="demo-color-sub--named" style="background-color: slateGrey">slateGrey</div>
              <div class="demo-color-sub--named" style="background-color: oliveDrab">oliveDrab</div>
              <div class="demo-color-sub--named" style="background-color: slateBlue">slateBlue</div>
              <div class="demo-color-sub--named" style="background-color: dimGray">dimGray</div>
              <div class="demo-color-sub--named" style="background-color: dimGrey">dimGrey</div>
              <div class="demo-color-sub--named" style="background-color: mediumAquaMarine">mediumAquaMarine</div>
              <div class="demo-color-sub--named" style="background-color: cornflowerBlue">cornflowerBlue</div>
              <div class="demo-color-sub--named" style="background-color: cadetBlue">cadetBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkOliveGreen">darkOliveGreen</div>
              <div class="demo-color-sub--named" style="background-color: indigo">indigo</div>
              <div class="demo-color-sub--named" style="background-color: mediumTurquoise">mediumTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateBlue">darkSlateBlue</div>
              <div class="demo-color-sub--named" style="background-color: steelBlue">steelBlue</div>
              <div class="demo-color-sub--named" style="background-color: royalBlue">royalBlue</div>
              <div class="demo-color-sub--named" style="background-color: turquoise">turquoise</div>
              <div class="demo-color-sub--named" style="background-color: mediumSeaGreen">mediumSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: limeGreen">limeGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateGray">darkSlateGray</div>
              <div class="demo-color-sub--named" style="background-color: darkSlateGrey">darkSlateGrey</div>
              <div class="demo-color-sub--named" style="background-color: seaGreen">seaGreen</div>
              <div class="demo-color-sub--named" style="background-color: forestGreen">forestGreen</div>
              <div class="demo-color-sub--named" style="background-color: lightSeaGreen">lightSeaGreen</div>
              <div class="demo-color-sub--named" style="background-color: dodgerBlue">dodgerBlue</div>
              <div class="demo-color-sub--named" style="background-color: midnightBlue">midnightBlue</div>
              <div class="demo-color-sub--named" style="background-color: aqua">aqua</div>
              <div class="demo-color-sub--named" style="background-color: cyan">cyan</div>
              <div class="demo-color-sub--named" style="background-color: springGreen">springGreen</div>
              <div class="demo-color-sub--named" style="background-color: lime">lime</div>
              <div class="demo-color-sub--named" style="background-color: mediumSpringGreen">mediumSpringGreen</div>
              <div class="demo-color-sub--named" style="background-color: darkTurquoise">darkTurquoise</div>
              <div class="demo-color-sub--named" style="background-color: deepSkyBlue">deepSkyBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkCyan">darkCyan</div>
              <div class="demo-color-sub--named" style="background-color: teal">teal</div>
              <div class="demo-color-sub--named" style="background-color: green">green</div>
              <div class="demo-color-sub--named" style="background-color: darkGreen">darkGreen</div>
              <div class="demo-color-sub--named" style="background-color: blue">blue</div>
              <div class="demo-color-sub--named" style="background-color: mediumBlue">mediumBlue</div>
              <div class="demo-color-sub--named" style="background-color: darkBlue">darkBlue</div>
              <div class="demo-color-sub--named" style="background-color: navy">navy</div>
              <div class="demo-color-sub--named" style="background-color: black">black</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import '@/assets/css/color/color.scss';

export default {
  name: 'Color',

  data () {
    return {
      common: {}
    }
  },

  components: {
  },

  created () {
  }
}
</script>

<style scoped>

</style>
