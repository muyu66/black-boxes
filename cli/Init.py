import os
import shutil


def aaa1(program_name):
    os.mkdir(program_name, 0755)
    os.mkdir(program_name + '/src', 0755)
    os.mkdir(program_name + '/config', 0755)


def aaa2(need_test):
    if need_test == 'n':
        print()
    else:
        os.mkdir(program_name + '/test', 0755)


def aaa3(need_tslint):
    if need_tslint == 'n':
        print()
    else:
        shutil.copyfile("tslint.json", program_name + '/tslint.json')


def aaa4(need_mit):
    if need_mit == 'n':
        print()
    else:
        shutil.copyfile("LICENSE.md", program_name + '/LICENSE.md')


def aaa5():
    shutil.copyfile(".env.json", program_name + '/.env.json')
    shutil.copyfile(".gitignore", program_name + '/.gitignore')
    shutil.copyfile("package.json", program_name + '/package.json')
    shutil.copyfile("README.md", program_name + '/README.md')
    shutil.copyfile("tsconfig.json", program_name + '/tsconfig.json')


print('Follow this wizard, you can directly generate a new site')
print("----------------------------------------")

# ------------------------------------------
print("Choose your purpose: ")
print("1. I want to create a site seriously")
print("2. I just want to experience it")

first = int(input("> "))

if first == 1:
    program_name = raw_input("Enter your program name: ")
    aaa1(program_name)
    need_test = raw_input("Need Unit test? [y|n]")
    aaa2(need_test)
    need_tslint = raw_input("Need Tslint.json? [y|n]")
    aaa3(need_tslint)
    need_mit = raw_input("Need MIT License? [y|n]")
    aaa4(need_mit)
    aaa5()
else:
    print('no')

raw_input('\n\n Press Enter to exit ...')
