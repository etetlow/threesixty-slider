# Hi, have now taken on this plugin. It's had a major rewrite.

![Three Sixty Image slider plugin](https://raw.github.com/etetlow/threesixty-slider/master/assets/logo@263.png)

Three Sixty Image slider plugin v2.5.2
=================
[![Tested with BrowserStack](https://raw.github.com/etetlow/threesixty-slider/master/assets/Browserstack-logo@2x.png)](https://browserstack.com)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)

This is a jQuery plugin to create 360 degree image sliders. The plugin is fully customizable with a number of options provided. The plugin has the ability to display images in any angle 360 degrees. This feature can be used successfully in many cases.
e.g. on an e-commerce site to help customers look at products in detail, from any angle they desire.

**Features**

- Smooth Animation
- Plenty of options
- Simple mouse interaction
- Support for touch devices
- Easy to integrate
- No flash
- Fullscreen now included as an option with the addition of [screenfull.js](https://sindresorhus.com/screenfull.js)

Installation
---------------------

git clone https://github.com/etetlow/threesixty-slider.git

npm install -g grunt-cli

npm install

grunt build

grunt

Example 1
---------------------
### JavaScript ######

    $(document).ready(function() {
        var product1;
        product1 = $('.product1').ThreeSixty({
            totalFrames: 72, // total number of images you have for 360 slider
            endFrame: 72, // end frame for the auto spin animation
            currentFrame: 1, // the start frame for auto spin
            imgList: '.threesixty_images', // selector for image list
            progress: '.spinner', // selector to show the loading progress
            imagePath:'assets/product1/', // path to the images
            filePrefix: 'ipod-', // file prefix if any
            ext: '.jpg', // extension for the assets
            height: 265, // height of images
            width: 400, // width of images
            navigation: true, // default navigation controls
            position: 'bottom-center', // position of controls
            disableSpin: false, // if you want to disable the auto spin
            responsive: true, // full aspect ratio responsiveness
            fullscreen: true, // fullscreen capabilities
            fSBackgroundColor: '#000', // fullscreen background color
            autoplayDirection: 1, // direction of play
            zeroPadding: true // if your images are padded to the same number of characters by 0
        });
    });

### HTML Snippet ######

    <div class="threesixty product1">
        <div class="spinner">
            <span>0%</span>
        </div>
        <ol class="threesixty_images"></ol>
    </div>


Here we are initializing an image slider for product 1. The ThreeSixty class constructor requires a config object with properties like totalFrame, endFrame and currentFrame

NB: The image slider will now resize on load in reference to its parent element, so no matter what space is available, the image slider will accomodate as much as it can with its aspect ratio intact


Documentation
---------------------
### Methods #####

Public methods to control the slider after initialization.
<table>
    <tr>
        <th>Method Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>.play()</td>
        <td>Function to trigger the auto rotation of the slider</td>
    </tr>
    <tr>
        <td>.stop()</td>
        <td>Function to stop the auto play</td>
    </tr>
    <tr>
        <td>.next()</td>
        <td>Function to move the slider to next frame</td>
    </tr>
    <tr>
        <td>.previous()</td>
        <td>Function to move the slider to previous frame</td>
    </tr>
    <tr>
        <td>.gotoAndPlay()</td>
        <td>Use this function if you want the slider spin to a particular frame with animation.</td>
    </tr>
    <tr>
        <td>.fullscreen()</td>
        <td>Function to enter and exit fullscreen mode.</td>
</table>

### Configuration #####

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Config</th>
            <th>Default value</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <td>totalFrames</td>
            <td>180</td>
            <td>Integer</td>
            <td>Set total number of frames used in the 360 rotation</td>
        </tr>
        <tr>
            <th>2</th>
            <td>currentFrame</td>
            <td>1</td>
            <td>Integer</td>
            <td>Set the starting point of the auto spin on initilise</td>
        </tr>
        <tr>
            <th>3</th>
            <td>endFrame</td>
            <td>180</td>
            <td>Integer</td>
            <td>Set the frame where you want the auto spin to stop</td>
        </tr>
        <tr>
            <th>4</th>
            <td>framerate</td>
            <td>60</td>
            <td>Integer</td>
            <td>Framerate for the spin animation</td>
        </tr>
        <tr>
            <th>6</th>
            <td>filePrefix</td>
            <td>''</td>
            <td>String</td>
            <td>File prefix for your images. If your file's name is foo-bar-001.png then filePrefix will be foo-bar-</td>
        </tr>
        <tr>
            <th>7</th>
            <td>ext</td>
            <td>png</td>
            <td>String</td>
            <td>File extension of your images</td>
        </tr>
        <tr>
            <th>8</th>
            <td>height</td>
            <td>300</td>
            <td>Integer</td>
            <td>Height of your images</td>
        </tr>
        <tr>
            <th>9</th>
            <td>width</td>
            <td>300</td>
            <td>Integer</td>
            <td>Width of your images</td>
        </tr>
        <tr>
            <th>10</th>
            <td>style</td>
            <td>{}</td>
            <td>Object</td>
            <td>Object container styles for the preloader similar to jQuery.css({})</td>
        </tr>
        <tr>
            <th>11</th>
            <td>navigation</td>
            <td>true</td>
            <td>Boolean</td>
            <td>Set false if you don't want default navigation controls</td>
        </tr>
        <tr>
            <th>12</th>
            <td>position</td>
            <td>top-right</td>
            <td>String</td>
            <td>Sets the position of the navigation bar within the slider.<br />Choice of 'top-left', 'top-center,' 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'</td>
        </tr>
        <tr>
            <th>13</th>
            <td>autoplayDirection</td>
            <td>1</td>
            <td>Integer</td>
            <td>Control the direction of the spin dependent on your images. You can use 1 or -1</td>
        </tr>
        <tr>
            <th>14</th>
            <td>drag</td>
            <td>true</td>
            <td>Boolean</td>
            <td>Set false if you want to disable mouse and touch events on the slider</td>
        </tr>
        <tr>
            <th>15</th>
            <td>disableSpin</td>
            <td>false</td>
            <td>Boolean</td>
            <td>Will disable the initial spin on load</td>
        </tr>
        <tr>
            <th>16</th>
            <td>zeroPadding</td>
            <td>false</td>
            <td>Boolean</td>
            <td>Set true if your numbering is 0 padded to the same character length</td>
        </tr>
        <tr>
            <th>17</th>
            <td>responsive</td>
            <td>false</td>
            <td>Boolean</td>
            <td>Enables full aspect-ratio responsiveness</td>
        </tr>
        <tr>
            <th>18</th>
            <td>fullscreen</td>
            <td>false</td>
            <td>Boolean</td>
            <td>Set true to add a fullscreen icon to the navigation bar when clicked will put your slider in fullscreen</td>
        </tr>
        <tr>
            <th>19</th>
            <td>fSBackgroundColor</td>
            <td>white</td>
            <td>String</td>
            <td>Sets the fullscreen background color</td>
        </tr>
        <tr>
            <th>20</th>
            <td>onReady</td>
            <td>function() {}</td>
            <td>Function</td>
            <td>Callback triggers once all images are loaded and ready to render on the screen</td>
        </tr>
        <tr>
            <th>21</th>
            <td>playSpeed</td>
            <td>100</td>
            <td>Integer</td>
            <td>Value to control the speed (in milliseconds) of play button rotation</td>
        </tr>
        <tr>
            <th>22</th>
            <td>zeroBased</td>
            <td>false</td>
            <td>Boolean</td>
            <td>Zero based for image filenames starting at 0</td>
        </tr>
    </tbody>
</table>

Browsers Supported
---------------------
![Browsers Supported](https://raw.github.com/etetlow/threesixty-slider/master/assets/browser_logos-64.png)

This plugin is supported in all browsers including our beloved IE 6
Some of the added features will only work in more modern browsers

Support
---------------------
For support and question please contact at [gaurav@jassal.me](mailto:gaurav@jassal.me) or follow at [@gauravjassal](http://twitter.com/gauravjassal)

LICENSE
---------
Copyright 2013 Gaurav Jassal
Released under the MIT and GPL Licenses.
