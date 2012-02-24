Place subfloor-js.xml in the build-res directory.
Change subfloor import in build.xml to subfloor-js
Add a property setting the subfloor file for subfloor-js to import with:
<property name="subfloor-js-pkg.file" value="subfloor-gwt.xml"/>
Make sure that property is before the import.

