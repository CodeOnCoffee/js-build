# Installation Steps

* Place subfloor-*.xml in the build-res directory.
* Add subfloor-js.xml to the build.xml
* Create a build file based on sample.build.js in the build-res directory.


# Dependant Project Ivy Config

Projects wishing to import JS from other projects need to include subfloor-js.xml and modify their ivy.xml as follows

```xml

  <configurations>
    ...
    <conf name="js"/> <!-- add js config -->
  </configurations>

  <!-- Example JS dependency -->
  <dependency org="pentaho" name="common-ui" rev="TRUNK-SNAPSHOT" conf="js->default" transitive="false">
    <artifact name="common-ui" type="js" ext="zip" m:classifier="js"/>
  </dependency>
```

# Publishing JS source 

Publishing Javscript from a project is straight-forward. Set the "module.script.dir" property in build.xml

```xml
<property name="module.script.dir" value="resource/script"/>
```

Modify the ivy.xml and add the "js" artifact.

```xml
<publications>
  <artifact name="pentaho-dashboards" type="jar"  conf="default" ext="jar"/>
  ...
  <artifact name="${ivy.artifact.id}" m:classifier="js" type="js" ext="zip" conf="js" /> <-- Javascript source -->
</publications>
```