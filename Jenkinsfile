pipeline {
    agent any 
    tools {nodejs "node js"}

   stages {
        stage('SCM PROJECT') {
            steps {
                echo 'Getting PROJECT FROM SCM'
                git branch: 'main', credentialsId: '4883425d-9cb5-479a-a84e-8d800e3f77af', url: 'https://github.com/aroussiteyeb/orientationBack.git'
                
            }
        }
        stage('BUILD') {
            steps {
                echo 'BUILD OF Project IN PROGRESS'
                sh 'npm isntall'
                
            }
        }
        stage('UNIT TEST') {
            steps {
                echo 'TEST PHASE IN PROGRESS'
                sh 'npm install --save-dev mocha'
                sh 'npm test' 
                
            }
        }
        stage('PACKAGE & DEPLOY') {
            steps {
                echo 'PACKAGING and DEPLOYMENT IN PROGRESS'
                
            }
        }
        stage('UI TEST') {
            steps {
                echo 'POST DEPLOYMENT TEST PHASE IN PROGRESS'
                
            }
        }
        stage('ARCHIVE') {
            steps {
                echo 'ARCHIVING PHASE IN PROGRESS'
                
            }
        }
    }
    post {  
         always {  
             echo 'This will always run'  
         }  
         success {  
             echo 'This will run only if successful' 
             mail to: "naivetechblog@gmail.com",
            subject: "Test Email",
            body: "Test"
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
