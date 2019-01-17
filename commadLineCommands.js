/*
The common redirection commands are:

> redirects standard output of a command to a file, overwriting previous content.
>> redirects standard output of a command to a file, appending new content to old content.
< redirects standard input to a command.
| redirects standard output of a command to another command.


number of other commands are powerful when combined with redirection commands:
sort: sorts lines of text alphabetically.
uniq: filters duplicate, adjacent lines of text.
grep: searches for a text pattern and outputs it.
sed : searches for a text pattern, modifies it, and outputs it.

*/

/*

//Using Nano text editior

nano ~/.bash_profile  creates a text file
~ - represents the home directory;
. - represensts that it is hidden;

command source ~/.bash_profile activates the changes in ~/.bash_profile for the current session. 
Instead of closing the terminal and needing to start a new session, source makes the changes available right away in the session we are in.

export VARIABLE="Value" sets and exports an environment variable.
USER is the name of the current user.
PS1 is the command prompt.
HOME is the home directory. It is usually not customized.
PATH returns a colon separated list of file paths. It is customized in advanced cases.
env returns a list of environment variables.
*/
