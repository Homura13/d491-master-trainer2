const QUESTIONS = [
  {
    "q": "Which type of data is needed to assess whether a new type of web content is increasing user engagement?",
    "options": [
      "Web log",
      "Demographic",
      "Competitor analysis",
      "Advertising cost"
    ],
    "a": "Web log",
    "cat": "Data Sources",
    "en": "Web logs record website activity like time on page, clicks, and visits.",
    "es": "Web log registra actividad del sitio: tiempo, clicks y visitas.",
    "real": "A company launches new web content and checks time spent on each page.",
    "keys": "web content • engagement • time spent",
    "trap": "",
    "id": 1
  },
  {
    "q": "A data analyst is tasked with creating a comprehensive report about a media company's user base for advertisers. Which data is most useful to include?",
    "options": [
      "Demographic",
      "Advertiser cost",
      "Web log",
      "Competitor analysis"
    ],
    "a": "Demographic",
    "cat": "Data Sources",
    "en": "Demographic data describes the user base for advertisers.",
    "es": "Demographic describe la audiencia: edad, ingresos, ubicación y más.",
    "real": "An advertiser wants to know if the audience matches their target market.",
    "keys": "user base • advertisers • age • socioeconomic",
    "trap": "",
    "id": 2
  },
  {
    "q": "A media firm is in talks with a larger conglomerate about a possible merger. Which data is relevant to include?",
    "options": [
      "Advertiser cost",
      "Competitor analysis",
      "Demographic",
      "Web log"
    ],
    "a": "Competitor analysis",
    "cat": "Data Sources",
    "en": "Competitor analysis is relevant for a merger because it gives external market context.",
    "es": "Competitor analysis sirve para una fusión porque muestra mercado y competencia.",
    "real": "A media company checks competitors before deciding whether a merger makes sense.",
    "keys": "merger • competitor • external data",
    "trap": "",
    "id": 3
  },
  {
    "q": "Which descriptive analytics question fits grocery purchases, transactions, and inventory data?",
    "options": [
      "What is the optimal inventory level for each product?",
      "Are there segments of customers whose purchase habits differ?",
      "What are the most popular products at each store's location?",
      "Can future purchases be predicted?"
    ],
    "a": "What are the most popular products at each store's location?",
    "cat": "Analytics Types",
    "en": "Descriptive analytics summarizes what happened or what is true in the data.",
    "es": "Descriptive contesta qué pasó o qué muestran los datos.",
    "real": "A grocery store summarizes the most sold products by location.",
    "keys": "what are • most popular • summary",
    "trap": "",
    "id": 4
  },
  {
    "q": "Which diagnostic analytics question fits production processes, downtime, and maintenance logs?",
    "options": [
      "How can energy consumption be reduced?",
      "What is the cost per unit of production?",
      "What was the cause of the production inefficiency that resulted in a six-hour delay yesterday?",
      "Can future equipment failure be predicted?"
    ],
    "a": "What was the cause of the production inefficiency that resulted in a six-hour delay yesterday?",
    "cat": "Analytics Types",
    "en": "Diagnostic analytics answers why something happened.",
    "es": "Diagnostic busca la causa de algo.",
    "real": "A factory checks logs to find why production stopped for six hours.",
    "keys": "cause • why • delay",
    "trap": "",
    "id": 5
  },
  {
    "q": "Which predictive analytics question fits patient demographics, history, outcomes, and readmissions?",
    "options": [
      "What caused the surge in readmissions last week?",
      "Which treatments are most likely to result in lower readmission in the future?",
      "What are the demographics of readmitted patients?",
      "What were the causes of readmissions?"
    ],
    "a": "Which treatments are most likely to result in lower readmission in the future?",
    "cat": "Analytics Types",
    "en": "Predictive analytics forecasts future outcomes.",
    "es": "Predictive predice resultados futuros.",
    "real": "A hospital predicts which treatments may lower future readmissions.",
    "keys": "most likely • future • predictive",
    "trap": "",
    "id": 6
  },
  {
    "q": "Which prescriptive analytics question fits customer demographics, purchase history, and campaigns?",
    "options": [
      "What is the best marketing strategy to target specific customer segments?",
      "Which products are most profitable during Q4?",
      "Can demographics target campaigns more effectively?",
      "What are customers likely to buy?"
    ],
    "a": "What is the best marketing strategy to target specific customer segments?",
    "cat": "Analytics Types",
    "en": "Prescriptive analytics recommends the best action.",
    "es": "Prescriptive recomienda la mejor acción.",
    "real": "A retailer recommends the best campaign for each customer segment.",
    "keys": "best strategy • recommend • action",
    "trap": "",
    "id": 7
  },
  {
    "q": "Which question should be asked about data sources and quality for a new project?",
    "options": [
      "Will the data support the hypothesis?",
      "What is the time frame of the data, and how often is it updated?",
      "Is the data from third party/public/private?",
      "Is the data .csv or .xls?"
    ],
    "a": "What is the time frame of the data, and how often is it updated?",
    "cat": "Data Quality",
    "en": "Time frame and update frequency affect whether data is suitable.",
    "es": "El tiempo y frecuencia de actualización dicen si la data sirve.",
    "real": "Old customer data may not represent current behavior.",
    "keys": "time frame • updated • quality",
    "trap": "",
    "id": 8
  },
  {
    "q": "Which survey quality question is best?",
    "options": [
      "Was the survey completed on Wi-Fi?",
      "What font was used?",
      "Was the survey sent to a random sample of customers?",
      "Was it collected on site or by email?"
    ],
    "a": "Was the survey sent to a random sample of customers?",
    "cat": "Data Quality",
    "en": "Random sampling reduces bias and improves representativeness.",
    "es": "Muestra aleatoria reduce sesgo.",
    "real": "A random customer sample gives better insight than only angry customers.",
    "keys": "random sample • bias • survey",
    "trap": "",
    "id": 9
  },
  {
    "q": "Which source/quality question is most appropriate before analyzing new drug patient outcomes?",
    "options": [
      "Did the data come from a completely unbiased source?",
      "Was the data collected in secret?",
      "Was the data collected from EHRs of patients using the drug?",
      "Can data be excluded to decrease side effects?"
    ],
    "a": "Was the data collected from EHRs of patients using the drug?",
    "cat": "Data Quality",
    "en": "The data source should be relevant to patients who actually used the drug.",
    "es": "La fuente debe venir de pacientes que sí usaron el medicamento.",
    "real": "A pharma company uses EHR outcomes for real patients taking the drug.",
    "keys": "EHR • patients using drug • source",
    "trap": "",
    "id": 10
  },
  {
    "q": "Which retail customer behavior data source is external?",
    "options": [
      "Sales data from company website",
      "Customer demographic data from loyalty program",
      "Social media activity of competitors",
      "Employee surveys"
    ],
    "a": "Social media activity of competitors",
    "cat": "Data Sources",
    "en": "External data comes from outside the company.",
    "es": "External data viene de fuera de la empresa.",
    "real": "A retailer reviews competitor social media activity.",
    "keys": "external • competitors • social media",
    "trap": "",
    "id": 11
  },
  {
    "q": "Which data quality requirement is most critical for finding highest profit margins?",
    "options": [
      "Consistency",
      "Completeness",
      "Accuracy",
      "Timeliness"
    ],
    "a": "Accuracy",
    "cat": "Data Quality",
    "en": "Profit margin calculations require correct sales and cost data.",
    "es": "Profit margin necesita datos correctos de ventas y costos.",
    "real": "Wrong cost data creates wrong profit conclusions.",
    "keys": "profit margin • correct • accuracy",
    "trap": "",
    "id": 12
  },
  {
    "q": "Which question should be asked about emailed customer satisfaction data source?",
    "options": [
      "Is the data backed up?",
      "Can the data be improved?",
      "Has it been copied into multiple languages?",
      "When was the data collected?"
    ],
    "a": "When was the data collected?",
    "cat": "Data Quality",
    "en": "When data was collected affects relevance.",
    "es": "La fecha de recolección afecta relevancia.",
    "real": "Satisfaction data from 5 years ago may not reflect today.",
    "keys": "when collected • relevance",
    "trap": "",
    "id": 13
  },
  {
    "q": "Which question helps determine if a data set is biased?",
    "options": [
      "Is the data from a self-reported survey?",
      "Is market research too comprehensive?",
      "Is there too much data?",
      "Is financial data objective?"
    ],
    "a": "Is the data from a self-reported survey?",
    "cat": "Data Quality",
    "en": "Self-reported surveys can be subjective and biased.",
    "es": "Encuestas self-reported pueden ser subjetivas.",
    "real": "People may exaggerate or underreport behavior.",
    "keys": "self-reported • survey • bias",
    "trap": "",
    "id": 14
  },
  {
    "q": "Which technique is most appropriate for analyzing customer demographics?",
    "options": [
      "Decision trees",
      "Neural network",
      "Clustering",
      "Linear regression"
    ],
    "a": "Clustering",
    "cat": "Techniques",
    "en": "Clustering groups similar customers.",
    "es": "Clustering agrupa clientes parecidos.",
    "real": "A retailer segments customers by age, income, and behavior.",
    "keys": "demographics • groups • segments",
    "trap": "",
    "id": 15
  },
  {
    "q": "Most appropriate technique for predicting sales next quarter?",
    "options": [
      "Bar chart",
      "Tree map",
      "Heat map",
      "Regression analysis"
    ],
    "a": "Regression analysis",
    "cat": "Techniques",
    "en": "Regression predicts/analyzes numerical outcomes like sales.",
    "es": "Regression predice resultados numéricos como ventas.",
    "real": "A company predicts next quarter revenue from past data.",
    "keys": "predict sales • numerical",
    "trap": "",
    "id": 16
  },
  {
    "q": "Most appropriate technique for analyzing website traffic patterns?",
    "options": [
      "Scatterplot",
      "Regression analysis",
      "Line chart",
      "Heat map"
    ],
    "a": "Heat map",
    "cat": "Visualizations",
    "en": "Heat maps show intensity and patterns using color.",
    "es": "Heat map muestra patrones con color.",
    "real": "A website heat map shows where users click most.",
    "keys": "website traffic • patterns • color",
    "trap": "",
    "id": 17
  },
  {
    "q": "Advantage of decision tree over linear regression?",
    "options": [
      "Faster and fewer resources",
      "More accurate predictions",
      "Handles missing data more effectively",
      "Handles nonlinear relationships between variables"
    ],
    "a": "Handles nonlinear relationships between variables",
    "cat": "Techniques",
    "en": "Decision trees can model nonlinear relationships with branches.",
    "es": "Decision trees manejan relaciones no lineales.",
    "real": "Loan approval may follow if/then branching rules.",
    "keys": "decision tree • nonlinear",
    "trap": "",
    "id": 18
  },
  {
    "q": "Impact of association rules on grocer sales data?",
    "options": [
      "Discover frequent item sets often purchased together",
      "Discover stockpiling behavior",
      "Predict future revenues",
      "Discover rare purchases"
    ],
    "a": "Discover frequent item sets often purchased together",
    "cat": "Techniques",
    "en": "Association rules find items purchased together.",
    "es": "Association rules encuentra productos comprados juntos.",
    "real": "Bread and milk buyers may also buy eggs.",
    "keys": "association rules • purchased together",
    "trap": "",
    "id": 19
  },
  {
    "q": "A company wants to predict likelihood of customer responding to a marketing campaign. Technique?",
    "options": [
      "Logistic regression",
      "K-means clustering",
      "Random forest",
      "PCA"
    ],
    "a": "Logistic regression",
    "cat": "Techniques",
    "en": "Logistic regression fits binary outcomes like respond/not respond.",
    "es": "Logistic regression es para sí/no.",
    "real": "Will the customer respond to the campaign: yes or no?",
    "keys": "likelihood • respond • binary",
    "trap": "",
    "id": 20
  },
  {
    "q": "When should an e-commerce analyst use an A/B test?",
    "options": [
      "Move workers offshore",
      "Use unique customer pricing",
      "Acquire a smaller company",
      "Change Add to Cart button color and measure sales impact"
    ],
    "a": "Change Add to Cart button color and measure sales impact",
    "cat": "Techniques",
    "en": "A/B testing compares two versions to measure impact.",
    "es": "A/B test compara dos versiones.",
    "real": "Half see blue button, half see green button.",
    "keys": "A/B test • button color",
    "trap": "",
    "id": 21
  },
  {
    "q": "Best approach for sentiment analysis on customer feedback?",
    "options": [
      "Regression analysis",
      "Text mining",
      "Time series analysis",
      "Clustering analysis"
    ],
    "a": "Text mining",
    "cat": "Techniques",
    "en": "Sentiment analysis uses text mining.",
    "es": "Sentiment analysis usa text mining.",
    "real": "A company analyzes comments for positive/negative feelings.",
    "keys": "sentiment • feedback • text",
    "trap": "",
    "id": 22
  },
  {
    "q": "Technique to predict holiday demand and reorder quantity?",
    "options": [
      "Experiment with music in store",
      "Text mining descriptions",
      "Machine learning algorithm to predict future demand and reorder quantity",
      "Clustering high and low spenders"
    ],
    "a": "Machine learning algorithm to predict future demand and reorder quantity",
    "cat": "Techniques",
    "en": "Machine learning can predict future demand from history and seasonality.",
    "es": "Machine learning predice demanda futura.",
    "real": "Walmart predicts toy demand for Christmas inventory.",
    "keys": "predict demand • reorder",
    "trap": "",
    "id": 23
  },
  {
    "q": "Visualization to compare social media engagement across platforms?",
    "options": [
      "Box plot",
      "Pie chart",
      "Bar graph",
      "Heat map"
    ],
    "a": "Bar graph",
    "cat": "Visualizations",
    "en": "Bar graphs compare values across categories.",
    "es": "Bar graph compara categorías.",
    "real": "Compare engagement on Instagram, TikTok, and Facebook.",
    "keys": "compare platforms • engagement",
    "trap": "",
    "id": 24
  },
  {
    "q": "Visualization to compare productivity of teams over time?",
    "options": [
      "Box plot",
      "Line chart",
      "Bubble chart",
      "Scatterplot"
    ],
    "a": "Line chart",
    "cat": "Visualizations",
    "en": "Line charts show trends over time.",
    "es": "Line chart muestra tendencias con tiempo.",
    "real": "Track weekly productivity for Team A and Team B.",
    "keys": "over time • trend",
    "trap": "",
    "id": 25
  },
  {
    "q": "Most effective technique for identifying patterns in large datasets?",
    "options": [
      "Naive Bayes",
      "Linear regression",
      "Decision trees",
      "Clustering"
    ],
    "a": "Clustering",
    "cat": "Techniques",
    "en": "Clustering finds groups and patterns in large datasets.",
    "es": "Clustering encuentra grupos/patrones.",
    "real": "A company finds natural customer segments.",
    "keys": "patterns • large datasets",
    "trap": "",
    "id": 26
  },
  {
    "q": "Best technique for identifying outliers?",
    "options": [
      "PCA",
      "Box plot",
      "Linear regression",
      "K-means clustering"
    ],
    "a": "Box plot",
    "cat": "Visualizations",
    "en": "Box plots show outliers, median, quartiles, and spread.",
    "es": "Box plot muestra outliers.",
    "real": "Salary data shows one extreme value outside the normal range.",
    "keys": "outliers • box plot",
    "trap": "",
    "id": 27
  },
  {
    "q": "Data requirement for logistic regression?",
    "options": [
      "Dependent variable numeric",
      "Independent variable positive",
      "Dependent variable binary",
      "Independent variable nominal"
    ],
    "a": "Dependent variable binary",
    "cat": "Techniques",
    "en": "Logistic regression requires a binary dependent variable.",
    "es": "Logistic regression necesita outcome binario.",
    "real": "Fraud/not fraud or respond/not respond.",
    "keys": "dependent variable • binary",
    "trap": "",
    "id": 28
  },
  {
    "q": "Which data is necessary for cluster analysis?",
    "options": [
      "Nominal",
      "Time series",
      "Continuous",
      "Categorical"
    ],
    "a": "Continuous",
    "cat": "Data Types",
    "en": "Continuous data allows distance/similarity calculations.",
    "es": "Continuous permite calcular distancia/similitud.",
    "real": "Group customers by spend amount and visit frequency.",
    "keys": "cluster • distance • continuous",
    "trap": "",
    "id": 29
  },
  {
    "q": "Which data is necessary for machine learning analysis?",
    "options": [
      "Nonstandardized data",
      "Health data from one hospital",
      "Survey response data",
      "Preprocessed data"
    ],
    "a": "Preprocessed data",
    "cat": "Data Preparation",
    "en": "Machine learning needs cleaned, transformed, standardized data.",
    "es": "Machine learning necesita data preprocesada.",
    "real": "Clean data before training a model.",
    "keys": "preprocessed • ML",
    "trap": "",
    "id": 30
  },
  {
    "q": "Metric for central tendency of salaries?",
    "options": [
      "Mode",
      "Range",
      "Standard deviation",
      "Median"
    ],
    "a": "Median",
    "cat": "Metrics",
    "en": "Median is middle value and less sensitive to outliers.",
    "es": "Median se afecta menos por outliers.",
    "real": "CEO salary is extreme, so median is better.",
    "keys": "central tendency • salary • median",
    "trap": "",
    "id": 31
  },
  {
    "q": "Metric for extreme high and low temperatures?",
    "options": [
      "Median",
      "Range",
      "Mode",
      "Mean"
    ],
    "a": "Range",
    "cat": "Metrics",
    "en": "Range measures spread from minimum to maximum.",
    "es": "Range mide mínimo a máximo.",
    "real": "Theme park rides must handle the full temperature range.",
    "keys": "extremes • range",
    "trap": "",
    "id": 32
  },
  {
    "q": "Metric for visitors who leave after one page?",
    "options": [
      "Conversion rate",
      "Bounce rate",
      "Churn rate",
      "Click-through rate"
    ],
    "a": "Bounce rate",
    "cat": "Metrics",
    "en": "Bounce rate measures visitors who leave after one page.",
    "es": "Bounce rate mide visitas de una sola página.",
    "real": "A user opens one page then exits.",
    "keys": "one page • leave",
    "trap": "",
    "id": 33
  },
  {
    "q": "A company asks which customers are likely to cancel in the next 90 days.",
    "options": [
      "Descriptive analytics",
      "Diagnostic analytics",
      "Predictive analytics",
      "Prescriptive analytics"
    ],
    "a": "Predictive analytics",
    "cat": "Analytics Types",
    "en": "Predictive forecasts future likely outcomes.",
    "es": "Predictive predice lo que probablemente pasará.",
    "real": "A telecom predicts who may cancel next month.",
    "keys": "likely • future • cancel",
    "trap": "",
    "id": 34
  },
  {
    "q": "A company asks what action should be taken to reduce churn.",
    "options": [
      "Descriptive analytics",
      "Diagnostic analytics",
      "Predictive analytics",
      "Prescriptive analytics"
    ],
    "a": "Prescriptive analytics",
    "cat": "Analytics Types",
    "en": "Prescriptive recommends actions.",
    "es": "Prescriptive recomienda acciones.",
    "real": "Netflix recommends the best retention offer.",
    "keys": "what action • reduce churn",
    "trap": "",
    "id": 35
  },
  {
    "q": "A company asks why customer complaints increased last week.",
    "options": [
      "Descriptive analytics",
      "Diagnostic analytics",
      "Predictive analytics",
      "Prescriptive analytics"
    ],
    "a": "Diagnostic analytics",
    "cat": "Analytics Types",
    "en": "Diagnostic answers why.",
    "es": "Diagnostic contesta por qué.",
    "real": "A manager checks causes of complaints.",
    "keys": "why • cause",
    "trap": "",
    "id": 36
  },
  {
    "q": "A company asks how many units were sold last month.",
    "options": [
      "Descriptive analytics",
      "Diagnostic analytics",
      "Predictive analytics",
      "Prescriptive analytics"
    ],
    "a": "Descriptive analytics",
    "cat": "Analytics Types",
    "en": "Descriptive summarizes what happened.",
    "es": "Descriptive resume qué pasó.",
    "real": "A report shows units sold last month.",
    "keys": "how many • last month",
    "trap": "",
    "id": 37
  },
  {
    "q": "A team meets stakeholders to define goals and success criteria.",
    "options": [
      "Discovery",
      "Data Preparation",
      "Model Planning",
      "Model Execution",
      "Communicate Results",
      "Operationalize"
    ],
    "a": "Discovery",
    "cat": "Lifecycle",
    "en": "Discovery defines problem/goals.",
    "es": "Discovery define problema/metas.",
    "real": "Managers meet before data work starts.",
    "keys": "stakeholders • goals",
    "trap": "",
    "id": 38
  },
  {
    "q": "A team cleans duplicates and missing values.",
    "options": [
      "Discovery",
      "Data Preparation",
      "Model Planning",
      "Model Execution",
      "Communicate Results",
      "Operationalize"
    ],
    "a": "Data Preparation",
    "cat": "Lifecycle",
    "en": "Data prep cleans data.",
    "es": "Data prep limpia data.",
    "real": "Customer file has blanks and duplicates.",
    "keys": "duplicates • missing",
    "trap": "",
    "id": 39
  },
  {
    "q": "A team compares algorithms before choosing one.",
    "options": [
      "Discovery",
      "Data Preparation",
      "Model Planning",
      "Model Execution",
      "Communicate Results",
      "Operationalize"
    ],
    "a": "Model Planning",
    "cat": "Lifecycle",
    "en": "Planning chooses model/technique.",
    "es": "Planning escoge modelo/técnica.",
    "real": "Compare logistic regression and random forest.",
    "keys": "compare algorithms",
    "trap": "",
    "id": 40
  },
  {
    "q": "A team trains and validates a model.",
    "options": [
      "Discovery",
      "Data Preparation",
      "Model Planning",
      "Model Execution",
      "Communicate Results",
      "Operationalize"
    ],
    "a": "Model Execution",
    "cat": "Lifecycle",
    "en": "Execution builds/tests models.",
    "es": "Execution entrena/prueba modelos.",
    "real": "Train churn model on historical data.",
    "keys": "train • validate",
    "trap": "",
    "id": 41
  },
  {
    "q": "A team presents dashboards and recommendations.",
    "options": [
      "Discovery",
      "Data Preparation",
      "Model Planning",
      "Model Execution",
      "Communicate Results",
      "Operationalize"
    ],
    "a": "Communicate Results",
    "cat": "Lifecycle",
    "en": "Communicate presents results.",
    "es": "Communicate presenta resultados.",
    "real": "Analyst presents dashboard to CEO.",
    "keys": "dashboard • recommendations",
    "trap": "",
    "id": 42
  },
  {
    "q": "A model is deployed and monitored in production.",
    "options": [
      "Discovery",
      "Data Preparation",
      "Model Planning",
      "Model Execution",
      "Communicate Results",
      "Operationalize"
    ],
    "a": "Operationalize",
    "cat": "Lifecycle",
    "en": "Operationalize means live use.",
    "es": "Operationalize es producción/uso real.",
    "real": "Fraud model scores daily transactions.",
    "keys": "deployed • production",
    "trap": "",
    "id": 43
  },
  {
    "q": "A company wants to predict a dollar amount.",
    "options": [
      "Logistic regression",
      "Linear regression",
      "Clustering",
      "Text mining",
      "PCA",
      "A/B test",
      "Time series analysis",
      "Market Basket Analysis"
    ],
    "a": "Linear regression",
    "cat": "Techniques",
    "en": "Linear regression predicts numbers.",
    "es": "Linear regression predice números.",
    "real": "Predict customer spending amount.",
    "keys": "dollar amount • number",
    "trap": "",
    "id": 44
  },
  {
    "q": "A company wants to predict fraud or not fraud.",
    "options": [
      "Logistic regression",
      "Linear regression",
      "Clustering",
      "Text mining",
      "PCA",
      "A/B test",
      "Time series analysis",
      "Market Basket Analysis"
    ],
    "a": "Logistic regression",
    "cat": "Techniques",
    "en": "Logistic regression predicts yes/no.",
    "es": "Logistic regression predice sí/no.",
    "real": "Transaction fraud: yes or no.",
    "keys": "binary • fraud",
    "trap": "",
    "id": 45
  },
  {
    "q": "A company wants to group similar customers.",
    "options": [
      "Logistic regression",
      "Linear regression",
      "Clustering",
      "Text mining",
      "PCA",
      "A/B test",
      "Time series analysis",
      "Market Basket Analysis"
    ],
    "a": "Clustering",
    "cat": "Techniques",
    "en": "Clustering groups similar records.",
    "es": "Clustering agrupa similares.",
    "real": "Segment shoppers into groups.",
    "keys": "group • similar",
    "trap": "",
    "id": 46
  },
  {
    "q": "A company wants to analyze customer comments.",
    "options": [
      "Logistic regression",
      "Linear regression",
      "Clustering",
      "Text mining",
      "PCA",
      "A/B test",
      "Time series analysis",
      "Market Basket Analysis"
    ],
    "a": "Text mining",
    "cat": "Techniques",
    "en": "Text mining analyzes text.",
    "es": "Text mining analiza texto.",
    "real": "Analyze reviews for complaints.",
    "keys": "comments • reviews",
    "trap": "",
    "id": 47
  },
  {
    "q": "A company wants to reduce 500 variables to fewer components.",
    "options": [
      "Logistic regression",
      "Linear regression",
      "Clustering",
      "Text mining",
      "PCA",
      "A/B test",
      "Time series analysis",
      "Market Basket Analysis"
    ],
    "a": "PCA",
    "cat": "Techniques",
    "en": "PCA reduces variables.",
    "es": "PCA reduce variables.",
    "real": "Reduce many columns before modeling.",
    "keys": "reduce variables",
    "trap": "",
    "id": 48
  },
  {
    "q": "A company wants to forecast monthly sales.",
    "options": [
      "Logistic regression",
      "Linear regression",
      "Clustering",
      "Text mining",
      "PCA",
      "A/B test",
      "Time series analysis",
      "Market Basket Analysis"
    ],
    "a": "Time series analysis",
    "cat": "Techniques",
    "en": "Time series forecasts over time.",
    "es": "Time series pronostica con tiempo.",
    "real": "Forecast sales by month.",
    "keys": "forecast • monthly",
    "trap": "",
    "id": 49
  },
  {
    "q": "A company wants to compare two versions of a webpage.",
    "options": [
      "Logistic regression",
      "Linear regression",
      "Clustering",
      "Text mining",
      "PCA",
      "A/B test",
      "Time series analysis",
      "Market Basket Analysis"
    ],
    "a": "A/B test",
    "cat": "Techniques",
    "en": "A/B compares versions.",
    "es": "A/B compara versiones.",
    "real": "Button A vs button B.",
    "keys": "two versions",
    "trap": "",
    "id": 50
  },
  {
    "q": "A grocer wants products bought together.",
    "options": [
      "Logistic regression",
      "Linear regression",
      "Clustering",
      "Text mining",
      "PCA",
      "A/B test",
      "Time series analysis",
      "Market Basket Analysis"
    ],
    "a": "Market Basket Analysis",
    "cat": "Techniques",
    "en": "Market basket finds bought-together items.",
    "es": "Market basket encuentra productos juntos.",
    "real": "Chips and salsa promotion.",
    "keys": "bought together",
    "trap": "",
    "id": 51
  },
  {
    "q": "Metric for ad clicks.",
    "options": [
      "CTR",
      "Conversion rate",
      "CAC",
      "CLV",
      "Churn rate",
      "ROI",
      "Bounce rate",
      "Engagement rate"
    ],
    "a": "CTR",
    "cat": "Metrics",
    "en": "CTR measures click percentage.",
    "es": "CTR mide clicks.",
    "real": "Users click an online ad.",
    "keys": "clicks • ad",
    "trap": "",
    "id": 52
  },
  {
    "q": "Metric for completed purchases.",
    "options": [
      "CTR",
      "Conversion rate",
      "CAC",
      "CLV",
      "Churn rate",
      "ROI",
      "Bounce rate",
      "Engagement rate"
    ],
    "a": "Conversion rate",
    "cat": "Metrics",
    "en": "Conversion measures completed action.",
    "es": "Conversion mide acción completada.",
    "real": "Visitors who buy after landing page.",
    "keys": "purchase • action",
    "trap": "",
    "id": 53
  },
  {
    "q": "Metric for cost to acquire customer.",
    "options": [
      "CTR",
      "Conversion rate",
      "CAC",
      "CLV",
      "Churn rate",
      "ROI",
      "Bounce rate",
      "Engagement rate"
    ],
    "a": "CAC",
    "cat": "Metrics",
    "en": "CAC is cost to get customer.",
    "es": "CAC es costo de adquirir cliente.",
    "real": "Ad spend divided by new customers.",
    "keys": "cost • acquire",
    "trap": "",
    "id": 54
  },
  {
    "q": "Metric for total customer value over relationship.",
    "options": [
      "CTR",
      "Conversion rate",
      "CAC",
      "CLV",
      "Churn rate",
      "ROI",
      "Bounce rate",
      "Engagement rate"
    ],
    "a": "CLV",
    "cat": "Metrics",
    "en": "CLV is lifetime value.",
    "es": "CLV es valor total del cliente.",
    "real": "Customer spends $100 yearly for 5 years.",
    "keys": "lifetime value",
    "trap": "",
    "id": 55
  },
  {
    "q": "Metric for customers who leave.",
    "options": [
      "CTR",
      "Conversion rate",
      "CAC",
      "CLV",
      "Churn rate",
      "ROI",
      "Bounce rate",
      "Engagement rate"
    ],
    "a": "Churn rate",
    "cat": "Metrics",
    "en": "Churn means leaving/canceling.",
    "es": "Churn son clientes que se van.",
    "real": "10 of 100 subscribers cancel.",
    "keys": "cancel • leave",
    "trap": "",
    "id": 56
  },
  {
    "q": "Metric for profitability from investment.",
    "options": [
      "CTR",
      "Conversion rate",
      "CAC",
      "CLV",
      "Churn rate",
      "ROI",
      "Bounce rate",
      "Engagement rate"
    ],
    "a": "ROI",
    "cat": "Metrics",
    "en": "ROI measures return/profitability.",
    "es": "ROI mide rentabilidad.",
    "real": "Campaign cost vs revenue generated.",
    "keys": "profitability",
    "trap": "",
    "id": 57
  },
  {
    "q": "Visualization for relationship between two numeric variables.",
    "options": [
      "Bar graph",
      "Line chart",
      "Scatterplot",
      "Box plot",
      "Histogram",
      "Pie chart",
      "Heat map"
    ],
    "a": "Scatterplot",
    "cat": "Visualizations",
    "en": "Scatterplot shows relationships.",
    "es": "Scatterplot muestra relación.",
    "real": "Ad spend vs revenue points.",
    "keys": "relationship • two numbers",
    "trap": "",
    "id": 58
  },
  {
    "q": "Visualization for outliers and quartiles.",
    "options": [
      "Bar graph",
      "Line chart",
      "Scatterplot",
      "Box plot",
      "Histogram",
      "Pie chart",
      "Heat map"
    ],
    "a": "Box plot",
    "cat": "Visualizations",
    "en": "Box plot shows outliers/spread.",
    "es": "Box plot muestra outliers.",
    "real": "Salary outlier detection.",
    "keys": "outliers",
    "trap": "",
    "id": 59
  },
  {
    "q": "Visualization for distribution of ages.",
    "options": [
      "Bar graph",
      "Line chart",
      "Scatterplot",
      "Box plot",
      "Histogram",
      "Pie chart",
      "Heat map"
    ],
    "a": "Histogram",
    "cat": "Visualizations",
    "en": "Histogram shows frequency distribution.",
    "es": "Histogram muestra distribución.",
    "real": "Customer age bins.",
    "keys": "distribution",
    "trap": "",
    "id": 60
  },
  {
    "q": "Visualization for trend over time.",
    "options": [
      "Bar graph",
      "Line chart",
      "Scatterplot",
      "Box plot",
      "Histogram",
      "Pie chart",
      "Heat map"
    ],
    "a": "Line chart",
    "cat": "Visualizations",
    "en": "Line chart shows time trends.",
    "es": "Line chart muestra tendencias.",
    "real": "Monthly revenue over a year.",
    "keys": "trend • time",
    "trap": "",
    "id": 61
  },
  {
    "q": "Visualization for percentages of a whole.",
    "options": [
      "Bar graph",
      "Line chart",
      "Scatterplot",
      "Box plot",
      "Histogram",
      "Pie chart",
      "Heat map"
    ],
    "a": "Pie chart",
    "cat": "Visualizations",
    "en": "Pie chart shows parts of whole.",
    "es": "Pie chart muestra partes del total.",
    "real": "Market share percentages.",
    "keys": "percentage • whole",
    "trap": "",
    "id": 62
  },
  {
    "q": "Data quality: correct values.",
    "options": [
      "Accuracy",
      "Completeness",
      "Consistency",
      "Timeliness",
      "Validity",
      "Bias / representativeness"
    ],
    "a": "Accuracy",
    "cat": "Data Quality",
    "en": "Accuracy means correct.",
    "es": "Accuracy es data correcta.",
    "real": "Age says 35 and is really 35.",
    "keys": "correct",
    "trap": "",
    "id": 63
  },
  {
    "q": "Data quality: no important fields missing.",
    "options": [
      "Accuracy",
      "Completeness",
      "Consistency",
      "Timeliness",
      "Validity",
      "Bias / representativeness"
    ],
    "a": "Completeness",
    "cat": "Data Quality",
    "en": "Completeness means not missing.",
    "es": "Completeness es que no falten datos.",
    "real": "Every record has name and email.",
    "keys": "not missing",
    "trap": "",
    "id": 64
  },
  {
    "q": "Data quality: same format.",
    "options": [
      "Accuracy",
      "Completeness",
      "Consistency",
      "Timeliness",
      "Validity",
      "Bias / representativeness"
    ],
    "a": "Consistency",
    "cat": "Data Quality",
    "en": "Consistency means same format.",
    "es": "Consistency es mismo formato.",
    "real": "TX/Texas standardized.",
    "keys": "same format",
    "trap": "",
    "id": 65
  },
  {
    "q": "Data quality: current and updated.",
    "options": [
      "Accuracy",
      "Completeness",
      "Consistency",
      "Timeliness",
      "Validity",
      "Bias / representativeness"
    ],
    "a": "Timeliness",
    "cat": "Data Quality",
    "en": "Timeliness means updated/on time.",
    "es": "Timeliness es actualizada.",
    "real": "Inventory updated today.",
    "keys": "current • updated",
    "trap": "",
    "id": 66
  },
  {
    "q": "Data quality: valid rules/format.",
    "options": [
      "Accuracy",
      "Completeness",
      "Consistency",
      "Timeliness",
      "Validity",
      "Bias / representativeness"
    ],
    "a": "Validity",
    "cat": "Data Quality",
    "en": "Validity follows expected rules.",
    "es": "Validity sigue formato esperado.",
    "real": "Date field contains real dates.",
    "keys": "valid format",
    "trap": "",
    "id": 67
  },
  {
    "q": "Data quality: random sample survey.",
    "options": [
      "Accuracy",
      "Completeness",
      "Consistency",
      "Timeliness",
      "Validity",
      "Bias / representativeness"
    ],
    "a": "Bias / representativeness",
    "cat": "Data Quality",
    "en": "Random samples reduce bias.",
    "es": "Muestra random reduce sesgo.",
    "real": "Survey sent to random customers.",
    "keys": "random sample • bias",
    "trap": "",
    "id": 68
  },
  {
    "q": "A company wants to determine whether a newly designed homepage improves customer sign-ups compared with the current homepage.",
    "options": [
      "A/B test",
      "PCA",
      "K-means clustering",
      "Box plot"
    ],
    "a": "A/B test",
    "cat": "Techniques",
    "en": "A/B testing compares two versions to measure which performs better.",
    "es": "A/B test compara dos versiones para saber cuál funciona mejor.",
    "real": "Half of website visitors see the old homepage and half see the new homepage. The company compares sign-ups.",
    "keys": "two versions • compare • sign-ups • impact",
    "trap": "",
    "id": 69
  },
  {
    "q": "An analyst wants to determine whether there is a relationship between membership level and preferred product category.",
    "options": [
      "Chi-square",
      "Linear regression",
      "Time series analysis",
      "CTR"
    ],
    "a": "Chi-square",
    "cat": "Techniques",
    "en": "Chi-square tests relationships between categorical variables.",
    "es": "Chi-square prueba relaciones entre variables categóricas.",
    "real": "A store checks whether Gold, Silver, or Bronze members prefer different product categories.",
    "keys": "categorical variables • relationship • membership level • product category",
    "trap": "",
    "id": 70
  },
  {
    "q": "A company wants to identify customer comments that mention shipping delays and negative emotions.",
    "options": [
      "Text mining",
      "Regression analysis",
      "ANOVA",
      "Range"
    ],
    "a": "Text mining",
    "cat": "Techniques",
    "en": "Text mining analyzes written text and can support sentiment analysis.",
    "es": "Text mining analiza texto y puede apoyar sentiment analysis.",
    "real": "Amazon analyzes thousands of reviews to find phrases like 'late delivery' and 'angry'.",
    "keys": "comments • negative emotions • text • sentiment",
    "trap": "",
    "id": 71
  },
  {
    "q": "A project sponsor asks the analytics team to define the expected business value and success criteria before the team starts cleaning data.",
    "options": [
      "Discovery",
      "Data Preparation",
      "Model Execution",
      "Operationalize"
    ],
    "a": "Discovery",
    "cat": "Lifecycle",
    "en": "Discovery defines the business problem, goals, scope, and success criteria.",
    "es": "Discovery define el problema, metas, alcance y criterios de éxito.",
    "real": "A sponsor says the project must reduce churn by 10%. The team defines what success means before analysis.",
    "keys": "sponsor • business value • success criteria • before cleaning",
    "trap": "",
    "id": 72
  }
];
const CATS = [
  "Analytics Types",
  "Data Preparation",
  "Data Quality",
  "Data Sources",
  "Data Types",
  "Lifecycle",
  "Metrics",
  "Techniques",
  "Visualizations"
];
