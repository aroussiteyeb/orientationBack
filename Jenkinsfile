pipeline {
    agent any 
    stages {
        stage('Static analysis') {
            steps {
                echo 'Run the static analysis to the code' 
  
            }
        }
        stage('Compile') {
            steps {
                echo 'Compile the source code' 
                 env.PATH = "/opt/jenkins/bin:${env.PATH}"
    catchError {
      // Install dependencies
      sh 'npm install'
      // Build assets with eg. webpack 
      sh 'npm run build'
    }
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
