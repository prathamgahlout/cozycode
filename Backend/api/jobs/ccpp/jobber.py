import os,signal
import subprocess
import threading



path = "/source/"
dir_list = os.listdir(path)

def killproc(pid):
    os.kill(pid,signal.SIGSTOP)

def runPython():
    process=''
    with open(path+'output.txt','w') as out:
        with open(path+'error.txt','w') as err:
            try:
                f =open(path+'input.txt')
                process = subprocess.Popen(['python3', path+'src.py'],stdin=f,
                                stdout=out, 
                                stderr=err)
                stdout,stderr = process.communicate()
            except:
                process = subprocess.Popen(['python3', path+'src.py'],
                                stdout=out, 
                                stderr=err)
                stdout,stderr = process.communicate()
    timer = threading.Timer(4,killproc(process.pid))
    timer.start()

def runJava():
    with open(path+'compile_output.txt','w') as out:
        with open(path+'compile_error.txt','w') as err:
            process = subprocess.Popen(['javac', path+'src.java'],
                            stdout=out, 
                            stderr=err)
            stdout,stderr = process.communicate()
    if os.stat(path+'compile_error.txt').st_size!=0:
        return "_compiler_error"
    dir_list = os.listdir(path)
    for file in dir_list:
        if file.endswith('.class'):
            with open(path+'output.txt','w') as out:
                with open(path+'error.txt','w') as err:
                    file = file.split('.')
                    try:
                        f =open(path+'input.txt')
                        process = subprocess.Popen(['java', '-classpath','./source',file[0]],stdin=f,
                                        stdout=out, 
                                        stderr=err)
                        stdout,stderr = process.communicate()
                    except:
                        process = subprocess.Popen(['java', '-classpath','./source',file[0]],
                                        stdout=out, 
                                        stderr=err)
                        stdout,stderr = process.communicate()
    return "_success"


def runC():
    with open(path+'compile_output.txt','w') as out:
        with open(path+'compile_error.txt','w') as err:
            process = subprocess.Popen(['gcc', path+'src.c','-o',path+'a'],
                            stdout=out, 
                            stderr=err)
            stdout,stderr = process.communicate()
    if os.stat(path+'compile_error.txt').st_size!=0:
        return "_compiler_error"
    dir_list = os.listdir(path)
    for file in dir_list:
        if file.startswith('a'):
            with open(path+'output.txt','w') as out:
                with open(path+'error.txt','w') as err:
                    file = file.split('.')
                    try:
                        f = open(path+'input.txt')
                        process = subprocess.Popen(path+file[0],stdin=f,
                                        stdout=out, 
                                        stderr=err)
                        stdout,stderr = process.communicate()
                    except:
                        process = subprocess.Popen(path+file[0],
                                        stdout=out, 
                                        stderr=err)
                        stdout,stderr = process.communicate()
    return "_success"


def runCpp():
    with open(path+'compile_output.txt','w') as out:
        with open(path+'compile_error.txt','w') as err:
            process = subprocess.Popen(['gpp', path+'src.c','-o',path+'a'],
                            stdout=out, 
                            stderr=err)
            stdout,stderr = process.communicate()
    if os.stat(path+'compile_error.txt').st_size!=0:
        return "_compiler_error"
    dir_list = os.listdir(path)
    for file in dir_list:
        if file.startswith('a'):
            with open(path+'output.txt','w') as out:
                with open(path+'error.txt','w') as err:
                    file = file.split('.')
                    try:
                        f = open(path+'input.txt')
                        process = subprocess.Popen(path+file[0],stdin=f,
                                        stdout=out, 
                                        stderr=err)
                        stdout,stderr = process.communicate()
                    except:
                        process = subprocess.Popen(path+file[0],
                                        stdout=out, 
                                        stderr=err)
                        stdout,stderr = process.communicate()
    return "_success"

def runRuby():
    with open(path+'output.txt','w') as out:
        with open(path+'error.txt','w') as err:
            try:
                f =open(path+'input.txt')
                process = subprocess.Popen(['ruby', path+'src.rb'],stdin=f,
                                stdout=out, 
                                stderr=err)
                stdout,stderr = process.communicate()
            except:
                process = subprocess.Popen(['ruby', path+'src.rb'],
                                stdout=out, 
                                stderr=err)
                stdout,stderr = process.communicate()

def runJS():
    with open(path+'output.txt','w') as out:
        with open(path+'error.txt','w') as err:
            try:
                f =open(path+'input.txt')
                process = subprocess.Popen(['node', path+'src.js'],stdin=f,
                                stdout=out, 
                                stderr=err)
                stdout,stderr = process.communicate()
            except:
                process = subprocess.Popen(['node', path+'src.js'],
                                stdout=out, 
                                stderr=err)
                stdout,stderr = process.communicate()


def runCsharp():
    with open(path+'compile_output.txt','w') as out:
        with open(path+'compile_error.txt','w') as err:
            process = subprocess.Popen(['mono', path+'src.cs'],
                            stdout=out, 
                            stderr=err)
            stdout,stderr = process.communicate()
    if os.stat(path+'compile_error.txt').st_size!=0:
        return "_compiler_error"
    dir_list = os.listdir(path)
    for file in dir_list:
        if file.endswith('.exe'):
            with open(path+'output.txt','w') as out:
                with open(path+'error.txt','w') as err:
                    #file = file.split('.')
                    try:
                        f = open(path+'input.txt')
                        process = subprocess.Popen(['mono',path+file],stdin=f,
                                        stdout=out, 
                                        stderr=err)
                        stdout,stderr = process.communicate()
                    except:
                        process = subprocess.Popen(['mono',path+file],
                                        stdout=out, 
                                        stderr=err)
                        stdout,stderr = process.communicate()
    return "_success"
def writeErrorOutput():
    with open(path+'error.txt','w') as inp,open(path+'output.txt','w') as inpout:
        with open(path+'compile_error.txt','r') as out:
            for line in out:
                inp.write(line)

def runSource():
    for file in dir_list:
        if file.endswith('.py'):
            runPython()
        elif file.endswith('.java'):
            status = runJava()
            if status=="_compiler_error":
                writeErrorOutput()
        elif file.endswith('.c'):
            status = runC()
            if status=="_compiler_error":
                writeErrorOutput()
        elif file.endswith('.cpp'):
            status = runCpp()
            if status=="_compiler_error":
                writeErrorOutput()
        #elif file.endswith('.cs'):
        #    status = runCsharp()
        #    if status=="_compiler_error":
        #        writeErrorOutput()
        elif file.endswith('.js'):
            runJS()
        elif file.endswith('.rb'):
            runRuby()


runSource()