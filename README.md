# Hex Clock

(✿╹◡╹) - "24 hours hexadecimal color clock runs from #000000 to #235959"

## Based on 
[Hex Clock - Jacopo Colo](https://www.jacopocolo.com/hexclock/)

# Create a Chrome Extension

Follow [this](https://developer.chrome.com/extensions/getstarted) tutorial to create a **Chrome Extension**.

### Put on manifest.json

```
{
  "manifest_version": 2,
  "version": "0.0.1", // Actual Extension Version
  "name": "Extension-Name",
  "description": "Description Here",
  "author": "Author Here",
  "browser_action": {
    "default_title": "Extension Title",
    "default_popup": "<path>/<to>/index.html",
    "default_icon": "<path>/<to>/my_icon.png"
  }
}
```
