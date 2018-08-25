## 2.5.2 (March 12th, 2018)
- Updated load method to comply with jQuery
- improved resize and responsive methods to give true aspect ratio responsiveness. threesixty will now make itself as large as it can within the restrictions of the parent element.
- improved upon the fullscreen and added fullscreen background color choice
- massively improved upon the navigation controls and added option of placement
- improved speed of image loading
- added alt to images to comply with W3C directives

## 2.5.1 (July 12th, 2017)
- Update JQuery to version 3.

## 2.5.0 (July 12th, 2017)
- Feature - Made fullscreen an option instead of plugin
- Feature - Made plugin fully responsive using aspect ratio
- Feature - Added option for light or dark navigation
- Feature - Using FontAwesome for navigation and fullscreen button

## 2.0.5 (Jan 6th, 2015)
- Fixed typo for AppCongif . [Issue #59](https://github.com/creativeaura/threesixty-slider/issues/59)

## 2.0.4 (Jan 5th, 2015)
- Fixed typo for AppCongif . [Issue #59](https://github.com/creativeaura/threesixty-slider/issues/59)

## 2.0.3 (Jan 5th, 2015)
- Get the last frame correctly . [Issue #60](https://github.com/creativeaura/threesixty-slider/issues/60)

## 2.0.2 (Jan 1th, 2015)
- Feature - pass animation speed in play function. [Issue #53](https://github.com/creativeaura/threesixty-slider/issues/53)

## 2.0.1 (Jan 1th, 2015)
- Removed console log from a function

## 2.0.0 (Jan 1th, 2015)

- Feature - Option add to control the speed of the play rotation. [Issue #53](https://github.com/creativeaura/threesixty-slider/issues/53)
- container dependency removed from css now . [Issue #51](https://github.com/creativeaura/threesixty-slider/issues/51)
- recalculate height on resize if responsive true . [Issue #34](https://github.com/creativeaura/threesixty-slider/issues/34)


## 1.0.9 (May 12th, 2014)

- BUG - base.browser.isIE returns TRUE on non IE browser [Issue #43](https://github.com/creativeaura/threesixty-slider/issues/43)
- Feature - Trigger "ready" event  [Issue #42](https://github.com/creativeaura/threesixty-slider/issues/42)

## 1.0.8 (April 3rd, 2014)

- Missing drag flag added to disable drag and swipe events [Issue #40](https://github.com/creativeaura/threesixty-slider/issues/40)

## 1.0.7 (November 26, 2013)

- Bug fixes and Bug fixes and minor enhancements

## 1.0.6-vml (November 20, 2013)

VML
Shane Daniel & Josh Robison

- allow for zero padding more than one digit
- smoother gotoAndPlay solution for infinite cycle
- **_disableWrap_** option was added for non-true-360 framesets

## 1.0.6 (Aug 17, 2013)
- minor ie issue fixed

## 1.0.5 (July 18, 2013)
- **_$.brower.msie_** issue fixed and plugin is now compatible with latest version for jQuery [Issue #26](https://github.com/creativeaura/threesixty-slider/issues/26)
- Code linting added grunt-jshint

## 1.0.4 (July 18, 2013)
- Fullscreen plugin added

## 1.0.3 (July 18, 2013)
- New demos added and website also updated [http:360slider](http://360slider.com)
- folder structure changed and removed all unwanted files.
- Optional zero padding for filename 1 - 9 [Issue #27](https://github.com/creativeaura/threesixty-slider/issues/27)
     zeroPadding: false // If you change it to true it will use zero padding for file names
- **_$.brower.msie_** issue fixed and plugin is now compatible with latest version for jQuery [Issue #26](https://github.com/creativeaura/threesixty-slider/issues/26)
    "Uncaught TypeError: Cannot read property 'msie' of undefined" // fixed
- Build script is now using GruntJS tasks
- _different animation length in .previous() and .next()_ fixed [Issue #23](https://github.com/creativeaura/threesixty-slider/issues/23)
- _PNG Images with "disableSpin: true"_ **fixed** [Issue #19](https://github.com/creativeaura/threesixty-slider/issues/19)
- Responsive demo added [Issue #2](https://github.com/creativeaura/threesixty-slider/issues/2)

## 1.0.2 (June 20, 2013)
- **_disbaleSpin_** flag was adding _current-image_ in first and third image and that caused issue with transparent .png image.

## 1.0.1 (June 03, 2013)
- **_disableSpin_** flag added
