pipeline {
    agent any 
    tools {nodejs "node js"}

   stages {
        stage('SCM PROJECT') {
            steps {
                echo 'Getting PROJECT FROM SCM'
                git branch: 'main', credentialsId: '4883425d-9cb5-479a-a84e-8d800e3f77af', url: 'https://github.com/aroussiteyeb/orientationBack.git'
                sleep(3)
            }
        }
        stage('BUILD') {
            steps {
                echo 'BUILD OF Project IN PROGRESS'
                sh 'npm isntall'
                sleep(3)
            }
        }
        stage('UNIT TEST') {
            steps {
                echo 'TEST PHASE IN PROGRESS'
                sh 'npm install --save-dev mocha'
                sh 'npm test' 
                sleep(3)
            }
        }
        stage('PACKAGE & DEPLOY') {
            steps {
                echo 'PACKAGING and DEPLOYMENT IN PROGRESS'
                sleep(3)
            }
        }
        stage('UI TEST') {
            steps {
                echo 'POST DEPLOYMENT TEST PHASE IN PROGRESS'
                sleep(3)
            }
        }
        stage('ARCHIVE') {
            steps {
                echo 'ARCHIVING PHASE IN PROGRESS'
                sleep(3)
            }
        }
    }
    post {  
         always {  
             echo 'This will always run'  
         }  
         success {  
             echo 'This will run only if successful' 
                          mail bcc: '', body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "aroussi1996@gmail.com";  

         }  
         failure {  
                          echo 'This will run only if successful'  

         }  
         unstable {  
             echo 'This will run only if the run was marked as unstable'  
         }  
         changed {  
             echo 'This will run only if the state of the Pipeline has changed'  
             echo 'For example, if the Pipeline was previously failing but is now successful'  
         }  
     }  
}
