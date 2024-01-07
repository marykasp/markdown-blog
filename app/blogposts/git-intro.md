---
title: "Understanding Git Basics"
date: "2024-01-07"
---

**Git** is an essential tool in the arsenal of every developer, enabling efficient version control and collaboration within projects. However, for many self-taught developers or those accustomed to working solo, diving into Git might seem daunting at first glance. This tutorial aims to demystify Git and help you take your first steps into version control, from installation to pushing your project live.

## What is Git?

Git stands as a **version control system (VCS)** designed for tracking changes in code. It facilitates collaboration among developers, allowing them to work on a project simultaneously through branches. It's crucial to note that Git is distinct from GitHub – the former is the system itself, while the latter serves as a hosting service for repositories.

## Step-by-Step Guide

#### Step 1: Installation

Mac: Open Terminal and type `git --version`. If Git isn't installed, get Xcode from the App Store. Optionally, install Homebrew for simplifying tool management.

Windows: Download Git for Windows, utilizing the Git Bash program for command execution.

#### Step 2: Create an Online Git Repository

Sign up on GitHub, create a new repository (e.g., 'project'), and refrain from initializing with a README.md or .gitignore.

#### Step 3: Create a Local Project

Navigate through basic command line commands and Git operations to set up your local project:

- Configure your global Git account.
- Initialize a Git repository locally.
- Connect your local directory with the GitHub repository.
- Add files to the local repository, track them, commit changes, and push files to the GitHub repository.

In order to navigate through the command line here are the most important commands, and all you need to know to get started.

## Basic command line reference

pwd Print Working Directory – shows the exact directory you're working in.
ls List Directories – lists all the files and folders in your current directory.
cd Change Directory – change to another directory.
mkdir Make Directory - create a new directory.

```bash
pwd
```

Create a new folder to hold your project:

```bash
mkdir project-name
```
