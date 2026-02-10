import { Project, Skill, Certification, Internship } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "VisionIQ -GLAUCOMA DETECTION",
    role: "Deep Learning",
    year: "2024",
    image: "images/VisionIQ.png",
    category: "Medical AI",
    description: "Automated diagnosis system utilizing Convolutional Neural Networks (CNNs) to detect glaucoma from retinal fundus images with high accuracy.",
    link: "https://visioniq-vecn.onrender.com"
  },
  {
    id: 2,
    title: "EventSync",
    role: "Vibe Coding",
    year: "2025",
    image: "images/EventSync.png",
    category: "Progressive Web App",
    description: "EventSync is a progressive web app (PWA) built to simplify how friends and families plan, manage, and experience events together. The platform allows users to effortlessly create and join events, coordinate details, and share memories through collaborative photo galleries in real time.",
    link: "https://eventssync.netlify.app/"
  }
];

export const SKILLS: Skill[] = [
  { id: 1, title: "GenAI", detail: "LangChain / RAG / Prompt Engineering / ChromaDB" },
  { id: 2, title: "Cloud & DevOps", detail: "AWS / Azure / Docker / Jenkins / GitHub Actions / Prometheus / Grafana" },
  { id: 3, title: "Backend & API", detail: "Python / FastAPI / Django / SQL" },
  { id: 4, title: "Tools & Platforms", detail: "NumPy / Pandas / Git / MLflow / Airflow / Networking / n8n / ETL / DVC" },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/bf8bd8db-5458-4f9a-af79-75540bfa87d0/linked_in_profile"
  },
  {
    id: 2,
    title: "Azure Administrator Associate",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/KarthikMarella-0665/65CA0E456D6F8D8E?sharingId=37A46769027B9626"
  },
  {
    id: 3,
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    link: "https://www.credly.com/badges/35e360b4-ffdf-459c-941a-f4389d7f287e/linked_in_profile"
  },
  {
    id: 4,
    title: "AI Certified Foundations Associate",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=F0C2C09086512FDD784385B2D789BBF18DA614C37554D70D32A635DC4C5A8599"
  },
  {
    id: 5,
    title: "GenAI Foundations",
    issuer: "DELL",
    link: "https://www.credly.com/badges/7c3903ee-9a40-4424-8e97-8d059d66c6a5/linked_in_profile"
  },
  {
    id: 6,
    title: "Network Security Practitioner",
    issuer: "The SecOps Group",
    link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXfyvzSq+l58L6lno0fcXj53woYEGqy9c5tQwvutnR8kaLohg0Qw0GwCFk2anMX+b2jxLfqlopiim5HLYruPv758="
  },
];

export const INTERNSHIPS: Internship[] = [
  {
    id: 1,
    role: "AWS DevOps Intern",
    company: "Technical Hub",
    period: "Jun 2022 - Aug 2023",
    description: [
      "Implementing Continuous Integration and Continuous Deployment pipelines using AWS services like CodePipeline, CodeBuild, and CodeDeploy.",
      "Support the provisioning and management of scalable AWS infrastructure using tools like AWS CloudFormation and Terraform.",
      "Help set up logging, monitoring, and alerting with CloudWatch and ensure basic security compliance using IAM roles, policies, and security groups.",
      "Set up and manage monitoring tools like Prometheus and Grafana to track system performance and visualize key metrics.",
      "Use Git with platforms like GitHub and DagsHub for version control, code collaboration, and managing development workflows."
    ]
  },
  {
    id: 2,
    role: "Artificial Intelligence & Machine Learning Intern",
    company: "EVOASTRA VENTURES",
    period: "Oct 2025 - Jan 2026",
    description: [
      "Build and track reproducible Machine Learning and Generative AI experiments using MLflow, capturing parameters, metrics, artifacts, prompt versions, embeddings, and model checkpoints.",
      "Design and orchestrate data, LLM fine-tuning, and model-training pipelines using Apache Airflow, ensuring dependency management, automated retries, and scalable workflow execution.",
      "Perform data preprocessing, feature engineering, and embedding generation using Python (NumPy, Pandas) and scalable tools like Spark, AWS Glue, along with ChromaDB for vector storage and retrieval-augmented generation (RAG).",
      "Develop LLM-powered and Agentic AI applications, integrating retrieval, memory, and tool-use to build intelligent, autonomous, and context-aware systems.",
      "Containerize ML and GenAI models using Docker and deploy through CI/CD and MLOps pipelines on AWS SageMaker, Kubernetes, while using Git, GitHub, and DagsHub for versioning code, datasets, prompts, and models."
    ]
  }
];