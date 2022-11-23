pipeline {
    agent any 
    tools {nodejs "node js"}

    stages {
        stage('Static analysis') {
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
        stage ('Deploy') {
             steps {
                 env.DEPLOYMENT_ENVIRONMENT = 'prod';
                 env.PROPERTY_FILE = 'env.prod.properties';
               
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
