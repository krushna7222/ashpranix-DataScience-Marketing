// export interface Course {
//   id: string;
//   name: string;
//   category: string;
//   duration: string;
//   description: string;
//   details: string[];
//   isComplimentary?: boolean;
// }

// export const courses: Course[] = [
  
//   // -------------------- Data_Science MODULES --------------------

// {
//   id: "data-science-fundamentals",
//   name: "Data_Science Fundamentals",
//   category: "Data_Science",
//   duration: "4 Weeks",
//   description:
//     "Learn the essential foundations of Data_Science including Python, data analysis, statistics, and visualization.",
//   details: [
//     "Python Basics: Variables, loops, functions, data types",
//     "NumPy: Array operations, broadcasting, reshaping",
//     "Pandas: DataFrames, merging, grouping, cleaning datasets",
//     "Data Cleaning: Handling nulls, duplicates, and outliers",
//     "Exploratory Data Analysis (EDA)",
//     "Matplotlib & Seaborn visualization",
//     "Statistics: Mean, median, mode, variance, distributions",
//     "Hypothesis Testing & A/B Testing",
//     "Correlation & Covariance",
//     "Basic Linear Algebra for ML",
//     "Working with CSV, Excel, SQL data",
//     "Intro to Databases: MySQL & MongoDB",
//     "Cloud basics for data pipelines"
//   ]
// },

// {
//   id: "machine-learning-ai",
//   name: "Machine Learning & AI",
//   category: "Data_Science",
//   duration: "4 Weeks",
//   description:
//     "Master machine learning algorithms, model training, hyperparameter tuning, and end-to-end ML workflows.",
//   details: [
//     "Supervised Learning: Regression, Classification",
//     "Unsupervised Learning: Clustering, PCA, Dimensionality Reduction",
//     "Tree Algorithms: Decision Trees, Random Forest, XGBoost",
//     "Model Evaluation: Accuracy, Precision, Recall, F1",
//     "Cross Validation & Overfitting Prevention",
//     "Feature Engineering & Feature Scaling",
//     "Hyperparameter Tuning: Grid Search, Random Search",
//     "Working with Real-World Datasets",
//     "Pipeline Automation using Scikit-Learn",
//     "Model Interpretability (SHAP, LIME)",
//     "Time Series Forecasting Basics",
//     "ML Deployment Introduction",
//     "Mini Project: ML model creation"
//   ]
// },

// {
//   id: "deep-learning-mlops",
//   name: "Deep Learning & MLOps",
//   category: "Data_Science",
//   duration: "5 Weeks",
//   description:
//     "Learn advanced deep learning using neural networks, CNN, RNN, and deploy models with MLOps pipelines.",
//   details: [
//     "Neural Networks Basics",
//     "TensorFlow/Keras Model Building",
//     "CNN for Image Classification",
//     "RNN, LSTM for Time Series & NLP",
//     "Transfer Learning",
//     "Autoencoders & Generative Models",
//     "Deploying Models with Flask/FastAPI",
//     "Docker for ML Deployment",
//     "AWS/GCP/Azure Deployment",
//     "MLOps: MLflow, DVC, CI/CD",
//     "Model Monitoring & Version Control",
//     "Cloud Pipelines & Automation",
//     "Capstone Project: Full DL Deployment"
//   ]
// },

// ];


export interface Course {
  id: string;
  name: string;
  category: string;
  duration: string;
  description: string;
  details: string[];
  isComplimentary?: boolean;
}

export const courses: Course[] = [

  // -------------------- Data_Science MODULES --------------------

  {
    id: "data-science-fundamentals",
    name: "Data Science Fundamentals",
    category: "Data_Science",
    duration: "4 Weeks",
    description:
      "Learn the essential foundations of Data Science including Python, data analysis, statistics, and visualization.",
    details: [
      "Python Basics: Variables, loops, functions, data types",
      "NumPy: Array operations, broadcasting, reshaping",
      "Pandas: DataFrames, merging, grouping, cleaning datasets",
      "Data Cleaning: Handling nulls, duplicates, and outliers",
      "Exploratory Data Analysis (EDA)",
      "Matplotlib & Seaborn visualization",
      "Statistics: Mean, median, mode, variance, distributions",
      "Hypothesis Testing & A/B Testing",
      "Correlation & Covariance",
      "Basic Linear Algebra for ML",
      "Working with CSV, Excel, SQL data",
      "Intro to Databases: MySQL & MongoDB",
      "Cloud basics for data pipelines"
    ]
  },

  {
    id: "machine-learning-ai",
    name: "Machine Learning & AI",
    category: "Data_Science",
    duration: "4 Weeks",
    description:
      "Master machine learning algorithms, model training, hyperparameter tuning, and end-to-end ML workflows.",
    details: [
      "Supervised Learning: Regression, Classification",
      "Unsupervised Learning: Clustering, PCA, Dimensionality Reduction",
      "Tree Algorithms: Decision Trees, Random Forest, XGBoost",
      "Model Evaluation: Accuracy, Precision, Recall, F1",
      "Cross Validation & Overfitting Prevention",
      "Feature Engineering & Feature Scaling",
      "Hyperparameter Tuning: Grid Search, Random Search",
      "Working with Real-World Datasets",
      "Pipeline Automation using Scikit-Learn",
      "Model Interpretability (SHAP, LIME)",
      "Time Series Forecasting Basics",
      "ML Deployment Introduction",
      "Mini Project: ML model creation"
    ]
  },

  {
    id: "deep-learning-mlops",
    name: "Deep Learning & MLOps",
    category: "Data_Science",
    duration: "5 Weeks",
    description:
      "Learn advanced deep learning using neural networks, CNN, RNN, and deploy models with MLOps pipelines.",
    details: [
      "Neural Networks Basics",
      "TensorFlow/Keras Model Building",
      "CNN for Image Classification",
      "RNN, LSTM for Time Series & NLP",
      "Transfer Learning",
      "Autoencoders & Generative Models",
      "Deploying Models with Flask/FastAPI",
      "Docker for ML Deployment",
      "AWS/GCP/Azure Deployment",
      "MLOps: MLflow, DVC, CI/CD",
      "Model Monitoring & Version Control",
      "Cloud Pipelines & Automation",
      "Capstone Project: Full DL Deployment"
    ]
  },

  // -------------------- NEW MODULE 1 --------------------

  {
    id: "data-engineering-bigdata",
    name: "Data Engineering & Big Data",
    category: "Data_Science",
    duration: "4 Weeks",
    description:
      "Learn to build and manage large-scale data pipelines, ETL workflows, real-time processing, and distributed systems.",
    details: [
      "Data Engineering Introduction",
      "ETL/ELT Pipelines Design",
      "Apache Hadoop Ecosystem",
      "HDFS, MapReduce Fundamentals",
      "Apache Spark: RDD, DataFrames, Transformations",
      "Kafka Streaming Basics",
      "Data Warehousing: Snowflake, Redshift, BigQuery",
      "Airflow for Workflow Automation",
      "NoSQL Databases (MongoDB, Cassandra)",
      "Batch vs Real-Time Data Processing",
      "Building Data Lakes & Lakehouses",
      "Cloud Data Engineering (AWS Glue, GCP Dataflow)",
      "Mini Project: Real-time ETL pipeline"
    ]
  },

  // -------------------- NEW MODULE 2 --------------------

  {
    id: "business-analytics-visualization",
    name: "Business Analytics & Data Visualization",
    category: "Data_Science",
    duration: "3 Weeks",
    description:
      "Master BI tools, dashboarding, insights generation, and data storytelling to solve business problems effectively.",
    details: [
      "Business Analytics Concepts",
      "Power BI: Dashboards, DAX, Data Modeling",
      "Tableau: Visualizations, Filters, Parameters",
      "Advanced Excel: Pivot Tables, VLOOKUP, Automation",
      "Data Storytelling Principles",
      "KPI Design & Reporting Standards",
      "Business Problem Solving using Data",
      "Marketing, Finance & Sales Analytics",
      "Time Series Dashboards",
      "Predictive Dashboards Integration",
      "Client Presentations & Insights Delivery",
      "Hands-on: BI Dashboard Project"
    ]
  },

  // -------------------- NEW MODULE 3 --------------------

  {
    id: "nlp-genai-advanced",
    name: "Advanced NLP & Generative AI",
    category: "Data_Science",
    duration: "4 Weeks",
    description:
      "Build NLP applications, transformers, LLM-based systems, and text-processing AI pipelines using GenAI tools.",
    details: [
      "Text Preprocessing: Tokenization, Stemming, Lemmatization",
      "Word Embeddings (Word2Vec, GloVe)",
      "Transformers Architecture",
      "BERT, RoBERTa, DistilBERT",
      "Text Classification & Sentiment Analysis",
      "Named Entity Recognition (NER)",
      "Chatbot Development with RNN/LSTM",
      "Prompt Engineering Fundamentals",
      "Building LLM Apps with OpenAI/Gemini APIs",
      "Vector Databases (Pinecone, FAISS)",
      "Retrieval-Augmented Generation (RAG)",
      "Fine-Tuning LLM Models",
      "Capstone Project: Build a GenAI NLP App"
    ]
  }

];
