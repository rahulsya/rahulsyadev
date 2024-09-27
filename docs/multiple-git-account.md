---
sidebar_label: "Setup multiple github account"
sidebar_position: 1
---

# Setup multiple github account with ssh

## **Create Folder .ssh**

Create folder .ssh on root folder of your device  
Example my root folder is on.

```
C:\Users\rahul\.ssh>
```

## **Generate SSH key**

Open folder .ssh and generate you ssh key with this following command

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

After that they will ask for ssh-key path dan name you can enter if you firstime generate it.  
Here is the example.

```bash
Enter file in which to save the key (C:\Users\rahul/.ssh/id_rsa): custom_id_rsa
```

### **Create file config**

After Generating ssh key, then you create file config on folder .ssh.  
You can customize the **Host** with your preferred alias and set the **IdentityFile** to the path where the SSH key was previously generated

```bash title="config
#account1
Host github.com
    HostName github.com
    IdentityFile /c/Users/rahul/.ssh/id_rsa

# account2
Host github.com-account-2
    HostName github.com
    IdentityFile /c/Users/rahul/.ssh/rahulacc2_id_rsa
```

## **Testing Clone Repo**

Testing Clone github repo you can run.

```bash
git clone git@github.com:yourusername/repo.git
```

Example.

```bash
git clone git@github.com-account-2/repo.git
```
