export const blogs = [
  {
    slug: 'hallucination-thesis-proposal',
    title: 'Distance-Aware Hallucination Detection in Vision-Language Models',
    type: 'Thesis Proposal',
    authors: 'Zunaid Zihan and team',
    tags: ['Thesis', 'Vision-Language Models', 'AI'],
    cover: '/projects/hallucination-thesis-proposal-cover.jpg',
    content: [
      'This is the proposal for our undergraduate thesis, which is still in progress. Vision-Language Models (VLMs) can answer questions about images, but they sometimes give wrong answers even when the question only needs simple visual perception. We call these hallucinations or perception errors.',
      'Our focus is traffic scenes, where objects get harder to see as they move farther from the camera. We use the DTPQA dataset (Distance-Annotated Traffic Perception Question Answering), which pairs traffic-scene images and questions with the real answer and the distance of the object being asked about. It includes both synthetic and real-world scenes.',
      'The plan: pick DTPQA samples across different distance ranges, run one or more VLMs on the questions, compare the answers with the ground truth, label wrong unsupported answers as hallucinations, and then study how the hallucination rate changes with distance. Finally we want to build a simple distance-aware detection method.',
      'Research question: how does object distance affect hallucination and perception errors in VLMs for traffic-scene question answering? We will measure accuracy, precision, recall, F1-score and the hallucination rate for each distance range.',
    ],
    files: [{ label: 'Thesis Proposal (PDF)', href: '/projects/hallucination-thesis-proposal.pdf' }],
  },
  {
    slug: 'brain-tumor-classification',
    title: 'Explainable Transfer Learning for Brain Tumor Classification',
    type: 'Research Poster',
    authors: 'MD. Touhidul Islam Siddik, Zunaid Zihan, Joy Debnath',
    tags: ['Deep Learning', 'Medical AI', 'Explainable AI'],
    cover: '/projects/brain-tumor-classification-cover.jpg',
    content: [
      'Classifying brain tumors from MRI scans by hand takes time and different experts can disagree. Many studies only report accuracy, so in this project we looked at accuracy, explainability and robustness together in one framework.',
      'We used the Figshare brain tumor MRI dataset: 3,064 contrast-enhanced T1-weighted images from 233 patients in three classes (glioma, meningioma and pituitary tumor). Images were resized to 224×224 and split into about 60% train, 20% validation and 20% test, with random flips and rotation during training.',
      'We compared five CNN backbones (ResNet-50, DenseNet-121, EfficientNet-B0, MobileNet-V2 and ConvNeXt-Tiny) using feature extraction, partial fine-tuning, full fine-tuning and training from scratch. To see where the models look, we used Grad-CAM, Grad-CAM++ and Score-CAM heatmaps. We also tested robustness against Gaussian noise, blur and rotation.',
      'ConvNeXt-Tiny with full fine-tuning gave the best result, with 97.53% accuracy, and it was also the most robust under noise, blur and rotation.',
    ],
    files: [
      { label: 'Poster (PDF)', href: '/projects/brain-tumor-classification.pdf' },
      { label: 'Poster (PowerPoint)', href: '/projects/brain-tumor-classification.pptx' },
    ],
  },
  {
    slug: 'diabetes-prediction-diabd',
    title: 'Machine Learning Models for Diabetes Prediction (DiaBD Dataset)',
    type: 'Research Paper',
    authors: 'Zunaid Zihan and team',
    tags: ['Machine Learning', 'Healthcare', 'Research'],
    cover: '/projects/diabetes-prediction-diabd-cover.jpg',
    content: [
      'Diabetes is a growing health problem in Bangladesh. In this paper we built an end-to-end machine learning pipeline to predict diabetes risk using the public DiaBD dataset.',
      'Clinical data is unbalanced, because there are far fewer diabetic cases than non-diabetic ones. So the pipeline uses leakage-safe preprocessing, checks that values are in a realistic physiological range, adds feature engineering and uses imbalance-aware training.',
      'We compared Logistic Regression, Random Forest, XGBoost, CatBoost and LightGBM. The boosting models, especially XGBoost and CatBoost, were better at finding diabetic cases, with ROC-AUC around 0.85, and XGBoost had the best PR-AUC. Random Forest had the highest accuracy (0.94) but found very few diabetic cases. This shows why accuracy alone is a misleading measure and why recall and PR-AUC matter for screening.',
      'The most important features, such as glucose, age and blood pressure, match what doctors would expect.',
    ],
    files: [{ label: 'Research Paper (PDF)', href: '/projects/diabetes-prediction-diabd.pdf' }],
  },
  {
    slug: 'electricity-demand-prediction',
    title: 'Predicting Daily Electricity Demand in Bangladesh',
    type: 'Research Paper',
    authors: 'Zunaid Zihan, Joy Debnath, Tansif Tushan',
    tags: ['Machine Learning', 'Random Forest', 'Research'],
    cover: '/projects/electricity-demand-prediction-cover.jpg',
    content: [
      'Good electricity demand forecasts help with grid planning and scheduling. In this paper we predicted the daily average electricity demand in Bangladesh using temperature data and a Random Forest model.',
      'We used demand data from the Power Grid Company of Bangladesh (PGCB) and daily maximum temperature (T2M_MAX) from the NASA POWER database. PGCB has several readings per day, so we averaged them into one value per day and merged both datasets by date.',
      'We added features such as previous-day demand, demand from 7 days before, a 7-day rolling average, month, day of week, weekend, year and a time index, then trained a Random Forest Regressor.',
      'With a chronological train-test split, which is the realistic way to test a forecast, the model reached an R² score of 0.84, so it explains about 84% of the change in daily demand. A random split scored higher (0.95), but that is expected because it lets the model see the future.',
    ],
    files: [{ label: 'Research Paper (PDF)', href: '/projects/electricity-demand-prediction.pdf' }],
  },
  {
    slug: 'mango-leaf-cnn',
    title: 'Mango Leaf Disease Classification with a CNN from Scratch',
    type: 'Course Project',
    authors: 'Zunaid Zihan',
    tags: ['Computer Vision', 'PyTorch', 'CNN'],
    cover: '/projects/mango-leaf-cnn-cover.jpg',
    content: [
      'In this Computer Vision project I built a CNN from scratch in PyTorch to classify mango leaf diseases using the MangoLeafBD dataset: 4,000 images in 8 classes, including Anthracnose, Bacterial Canker, Die Back, Powdery Mildew and Healthy.',
      'The dataset has no train and validation folders, so I made my own 80/20 split (3,200 training and 800 validation images) with a fixed seed, and resized every image to 128×128.',
      'The model has three convolution and pooling blocks followed by fully connected layers. In Round 1 I trained it plainly, without augmentation or dropout, to watch it overfit. In Round 2 I added data augmentation (flips, rotation, colour jitter) and dropout of 0.5, and compared the training and validation curves.',
      'The best validation accuracy was 97.8% in Round 1 and 94.0% in Round 2, but the Round 2 curves stayed closer together. I finished with a confusion matrix and a classification report for each disease class.',
    ],
    files: [
      { label: 'Notebook (PDF)', href: '/projects/mango-leaf-cnn.pdf' },
      { label: 'Notebook (.ipynb)', href: '/projects/mango-leaf-cnn.ipynb' },
    ],
  },
]

// Short preview text for the blog cards
export function getExcerpt(blog, length = 280) {
  const first = blog.content.find((block) => typeof block === 'string')
  if (first.length <= length) return first
  return first.slice(0, first.lastIndexOf(' ', length)) + '...'
}

// Reading time at roughly 200 words per minute
export function getReadTime(blog) {
  const words = blog.content
    .map((block) => (typeof block === 'string' ? block : block.heading))
    .join(' ')
    .split(/\s+/).length
  return Math.max(1, Math.round(words / 200)) + ' Min'
}
