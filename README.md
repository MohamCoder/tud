# windpws-path-to-unix-path
what is tud (to unix directory)?
    tud is a tool you can use to convert windows paths to unix paths in wsl
how to use tud?
    just type `tud` in your terminal

```bash
tud "windows path"
```
what will it return?
    it will return the unix path that starts with "/mnt/"

if you want to run tud globally do this:
    1-you need to copy the path of tud.js to the clipboard
    2-you need to add it as an alias to your .bashrc\

```bash
alias tud='node /path/to/to_unix_dir/tud.js'
```
