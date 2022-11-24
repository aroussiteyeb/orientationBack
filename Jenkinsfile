pipeline {
    agent any 
    tools {nodejs "node js"}

    stages {
        stage('Static Analysis') {
            steps {
                echo 'Run the static analysis to the code' 
                
                script {
              scannerHome = tool 'sonar'
            }
            withSonarQubeEnv('SonarQube Scanner') {
              sh "${scannerHome}/bin/sonar-scanner"
            }
            }
        }
        stage('Compile') {
            steps {
                echo 'Compile the source code' 

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
                               echo 'Run deploy' 

                  
              
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
