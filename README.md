# Project-Command-Utility
designed own commands like windows/linux (eg, ls, help, organize)
#Note: the main code for this project is under Activity folder

#this is a command utility project which has 3 commands 
  1. help
  2. view
  3. organize

#Description and syntax of each command
1. Help
    Syntax:  node mycli.js help
    Output: this command lists all the commands and their syntaxes.

2. View 
    Syntax:  node mycli.js view directory_path visibility_mode
          where,
              visibility_mode= --tree or --flat
              
          a. node mycli.js view directory_path --tree
          Output: it lists the current directory and subdirectories and files in tree structure format. "*' is appended at the end if it is a file.
          b. node mycli.js view directory_path --flat
          Output: it lists the current directory and subdirectories and files in flat/path structure format. "*' is appended at the end if it is a file.
          
3. Organize
    Syntax:  node mycli.js organize [directory_path]    
              where, directory_path is optional
    Output: it creates a folder under current path with name "OrgaziedFiles" which has sub folders named "Images", "Docs", "Audios", "Videos" and "Txts"
            it takes each file and put that file in it's respective folder from OrgaziedFiles's subfolder
            For example, after running this command "Images" folder will have all the .jpeg, .png, ,gif files 


How to run:
        Step 1: Open Command prompt
        Step 2: Go to Activity folder by using 'cd' command
        Step 3: Run command: "node mycli.js help"
        Note: you can run any command from the given three commands.
        
