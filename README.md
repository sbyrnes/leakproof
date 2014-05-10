Leakproof
=========

It is becoming increasingly common that companies find their sensitive internal communications and documents leaked to the press.
In these cases, it is usually impossible to determine who generated the leak since the communication was available to a large number of employees (if not all of them).

Tracing leaks is difficult because most of the content is simply text which can be copy and pasted from one email account to another.
When that happens, all unique identifying information such as MIME headers and identifiers are lost.

This problem can be abstracted by assuming we have a group of individuals, each with a unique email account, and a text payload we want to share with them.
One of those individuals is a traitor and will share the information, and we obtain a copy of the text leaked by the traitor.

Leakproof is an experiment in identifying the leaker of information by modifying the text of the message itself.
By modifying the text of the message but not changing the meaning, so that each group member receives a unique text payload, the leaked text should uniquely identify the traitor.

Algorithm
=========
Modifying the text payload without changing the meaning of the message is a sensitive undertaking.
Changing sentences is too likely to change the meaning, but small changes like additional spaces
are too easily fixed by the traitor before leaking the information.
Adding mistakes in grammar or punctuation are likely to be caught by automatic grammar checkers.
Making only a single change is too risky since that part of the text may be omitted in the leak, but
making too many changes increases the chances of inadvertently changing the message.

To avoid this challenges, Leakproof uses the following methods of modifying the text payload:
* Synonym replacement.
* Spacing variations.

Usage
=========
First, be sure you have installed Node, v0.6 or later.

Clone this repository and then you can use Leakproof from the command line as follows:

    leakproof.sh PAYLOAD_FILENAME EMAILLIST_FILENAME

This will send the PAYLOAD to everyone on the EMAILLIST.  
The PAYLOAD file should be a plain text file.
The EMAILLIST_FILENAME should be a text file with a comma delimited list of email addresses.

Given a block of leaked text, you can determine the email address it was sent to using the following:

    unleak.sh LEAK_FILENAME
