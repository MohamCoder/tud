# windpws-path-to-unix-path
what is tud (to unix directory)?<br>
    tud is a tool you can use to convert windows paths to unix paths in wsl<br>
how to use tud?<br>
    just type `tud` in your terminal

```bash
tud "windows path"
```
what will it return?<br>
    it will return the unix path that starts with "/mnt/"
<br>
if you want to run tud globally do this:<br>
    1-you need to copy the path of tud.js to the clipboard<br>
    2-you need to add it as an alias to your .bashrc\

```bash
alias tud='node /path/to/to_unix_dir/tud.js'
```
