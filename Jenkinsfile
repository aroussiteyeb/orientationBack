pipeline {
    agent any 
    tools {nodejs "node js"}

    stages {
        stage('Static Analysis') {
            steps {
                echo 'Run the static analysis to the code' 
            }
        }
        stage('Compile') {
            steps {
                echo 'Compile the source code' 
                // Install dependencies
                sh 'npm install'
            }
        }
        stage('Security Check') {
            steps {
                echo 'Run the security check against the application' 
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo 'Run unit tests from the source code' 
            }
        }
        stage('deploy') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: "jenkins-ssh", keyFileVariable: 'sshkey')]){
                  echo 'deploying the software'
                  sh '''#!/bin/bash
                  echo "Creating .ssh"
                  mkdir -p /var/lib/jenkins/.ssh
                  ssh-keyscan 192.168.33.11 >> /var/lib/jenkins/.ssh/known_hosts
                  ssh-keyscan 192.168.33.12 >> /var/lib/jenkins/.ssh/known_hosts

                  rsync -avz --exclude  '.git' --delete -e "ssh -i $sshkey" ./ vagrant@192.168.33.11:/app/
                  rsync -avz --exclude  '.git' --delete -e "ssh -i $sshkey" ./ vagrant@192.168.33.12:/app/

                  ssh -i $sshkey vagrant@192.168.33.11 "sudo systemctl restart nodeapp"
                  ssh -i $sshkey vagrant@192.168.33.12 "sudo systemctl restart nodeapp"

                  '''
              }
          }
        stage('Run Integration Tests') {
            steps {
                echo 'Run only crucial integration tests from the source code' 
            }
        }
        stage('Publish Artifacts') {
            steps {
                echo 'Save the assemblies generated from the compilation' 
            }
        }
    }
}
