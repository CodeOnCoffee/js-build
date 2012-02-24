Place subfloor-js.xml in the build-res directory.
Change subfloor import in build.xml to subfloor-js
Add a property setting the subfloor file for subfloor-js to import with:
&gt;property name="subfloor-js-pkg.file" value="subfloor-gwt.xml"/&lt;
Make sure that property is before the import.

