Place subfloor-js.xml in the build-res directory.
Change subfloor import in build.xml to subfloor-js
Add a property setting the subfloor file for subfloor-js to import with:
&lt;property name="subfloor-js-pkg.file" value="subfloor-gwt.xml"/&gt;
Make sure that property is before the import.
Create a build file based on sample.build.js in the build-res directory.
