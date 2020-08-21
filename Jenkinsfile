pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Sonarqube Scanner') {
      environment {
        scannerHome = tool 'SonarQubeScanner'
      }
      steps {
        withSonarQubeEnv('sonarqube') {
          sh "echo ${scannerHome}"
          sh "${scannerHome}/bin/sonar-scanner -X"
        }
      }
    }
  }
}
