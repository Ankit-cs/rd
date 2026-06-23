export interface Article {
  id: number;
  title: string;
  url: string;
  topics: string[];
  year: string;
}

export interface CompanyBlog {
  companyName: string;
  blogUrl: string;
  articles: Article[];
}

export const ENGINEERING_BLOGS: CompanyBlog[] = [
  {
    "companyName": "Airbnb",
    "blogUrl": "https://medium.com/airbnb-engineering",
    "articles": [
      {
        "id": 1,
        "title": "Embedding-Based Retrieval for Airbnb Search",
        "url": "https://medium.com/airbnb-engineering/embedding-based-retrieval-for-airbnb-search-aabebfc85839",
        "topics": [
          "Search",
          "AI/ML"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "How Airbnb improved page performance using HTTP Streaming",
        "url": "https://medium.com/airbnb-engineering/improving-performance-with-http-streaming-ba9e72c66408",
        "topics": [
          "Performance",
          "Frontend"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "Airbnb's Data Framework for faster and more reliable read-heavy workloads",
        "url": "https://medium.com/airbnb-engineering/riverbed-optimizing-data-access-at-airbnbs-scale-c37ecf6456d9",
        "topics": [
          "Data Engineering",
          "Performance"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "Avoiding Double Payments in a Distributed Payments System",
        "url": "https://medium.com/airbnb-engineering/avoiding-double-payments-in-a-distributed-payments-system-2981f6b070bb",
        "topics": [
          "Payments",
          "Architecture"
        ],
        "year": "2019"
      }
    ]
  },
  {
    "companyName": "Amazon Science",
    "blogUrl": "https://www.amazon.science/blog",
    "articles": [
      {
        "id": 1,
        "title": "Training code generation models to debug their own outputs",
        "url": "https://www.amazon.science/blog/training-code-generation-models-to-debug-their-own-outputs",
        "topics": [
          "AI/ML"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "The technology behind Amazon's GenAI-powered shopping assistant, Rufus",
        "url": "https://www.amazon.science/blog/the-technology-behind-amazons-genai-powered-shopping-assistant-rufus",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Ensuring that customers don't miss out on trending products",
        "url": "https://www.amazon.science/blog/ensuring-that-customers-dont-miss-out-on-trending-products",
        "topics": [
          "Search",
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "From structured search to learning-to-rank-and-retrieve",
        "url": "https://www.amazon.science/blog/from-structured-search-to-learning-to-rank-and-retrieve",
        "topics": [
          "Search",
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "Invalidating robotic ad clicks in real time",
        "url": "https://www.amazon.science/blog/invalidating-robotic-ad-clicks-in-real-time",
        "topics": [
          "Security",
          "Data Engineering"
        ],
        "year": "2023"
      },
      {
        "id": 6,
        "title": "Using large language models (LLMs) to synthesize training data",
        "url": "https://www.amazon.science/blog/using-large-language-models-llms-to-synthesize-training-data",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 7,
        "title": "Lessons learned from 10 years of DynamoDB",
        "url": "https://www.amazon.science/blog/lessons-learned-from-10-years-of-dynamodb",
        "topics": [
          "Databases"
        ],
        "year": "2022"
      },
      {
        "id": 8,
        "title": "Using graph neural networks to recommend related products",
        "url": "https://www.amazon.science/blog/using-graph-neural-networks-to-recommend-related-products",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2022"
      }
    ]
  },
  {
    "companyName": "Atlassian",
    "blogUrl": "https://www.atlassian.com/blog/developer",
    "articles": [
      {
        "id": 1,
        "title": "How Atlassian Scaled and Enhanced Throughput in the Jira Export Service",
        "url": "https://www.atlassian.com/blog/atlassian-engineering/boosting-performance-how-we-scaled-and-enhanced-throughput-in-the-jira-export-service",
        "topics": [
          "Performance",
          "Architecture"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "How one of Atlassian's critical services consistently gets above 99.9999% of availability",
        "url": "https://www.atlassian.com/blog/atlassian-engineering/atlassian-critical-services-above-six-nines-of-availability",
        "topics": [
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 3,
        "title": "How Atlassian made Git push over HTTPS faster for Bitbucket Cloud",
        "url": "https://www.atlassian.com/blog/atlassian-engineering/faster-git-push-over-https-for-bitbucket-cloud",
        "topics": [
          "Performance"
        ],
        "year": "2022"
      },
      {
        "id": 4,
        "title": "How Atlassian Revamped Confluence Cloud Search",
        "url": "https://www.atlassian.com/blog/atlassian-engineering/revamping-confluence-cloud-search",
        "topics": [
          "Search"
        ],
        "year": "2021"
      },
      {
        "id": 5,
        "title": "Caching JQL search in Jira Cloud",
        "url": "https://www.atlassian.com/blog/atlassian-engineering/reducing-jql-database-load-with-caches",
        "topics": [
          "Caching",
          "Databases"
        ],
        "year": "2021"
      },
      {
        "id": 6,
        "title": "Scaling, rearchitecting, and decomposing Confluence Cloud",
        "url": "https://www.atlassian.com/blog/atlassian-engineering/scaling-rearchitecting-and-decomposing-confluence-cloud",
        "topics": [
          "Architecture"
        ],
        "year": "2020"
      },
      {
        "id": 7,
        "title": "Scaling Bitbucket's Database",
        "url": "https://www.atlassian.com/blog/atlassian-engineering/scaling-bitbuckets-database",
        "topics": [
          "Databases"
        ],
        "year": "2020"
      },
      {
        "id": 8,
        "title": "Atlassian's journey scaling low latency, multi-region services on AWS",
        "url": "https://www.atlassian.com/blog/atlassian-engineering/aws-scaling-multi-region-low-latency-service",
        "topics": [
          "Infrastructure",
          "Performance"
        ],
        "year": "2019"
      }
    ]
  },
  {
    "companyName": "Booking.com",
    "blogUrl": "https://blog.booking.com/",
    "articles": [
      {
        "id": 1,
        "title": "Anomaly Detection in Time Series Using Statistical Analysis",
        "url": "https://medium.com/booking-com-development/anomaly-detection-in-time-series-using-statistical-analysis-cc587b21d008",
        "topics": [
          "Observability",
          "Data Engineering"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "How Booking Cut 20% of the Cloud Cost with a Single Code Change",
        "url": "https://medium.com/booking-com-development/use-compression-luke-cut-20-of-the-cloud-cost-with-a-single-code-change-510d14d96891",
        "topics": [
          "Cost Optimization"
        ],
        "year": "2025"
      },
      {
        "id": 3,
        "title": "The Engineering Behind Booking.com's High-Performance Ranking Platform",
        "url": "https://medium.com/booking-com-development/the-engineering-behind-booking-coms-ranking-platform-a-system-overview-2fb222003ca6",
        "topics": [
          "Search",
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "How Booking.com Leverage graph technology for real-time Fraud Detection and Prevention",
        "url": "https://medium.com/booking-com-development/leverage-graph-technology-for-real-time-fraud-detection-and-prevention-438336076ea5",
        "topics": [
          "Security"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "How Booking.com Predicts cancellations with survival modeling",
        "url": "https://booking.ai/predicting-cancellations-with-survival-modeling-a299af54249b",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      }
    ]
  },
  {
    "companyName": "Canva",
    "blogUrl": "https://www.canva.dev/blog/engineering/",
    "articles": [
      {
        "id": 1,
        "title": "Canva's continuous data platform",
        "url": "https://www.canva.dev/blog/engineering/snowpipe-streaming/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "How Canva's drawing tool works",
        "url": "https://www.canva.dev/blog/engineering/behind-the-draw/",
        "topics": [
          "Frontend"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "How Canva collects 25 billion events per day",
        "url": "https://www.canva.dev/blog/engineering/product-analytics-event-collection/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "Canva's scalable and reliable content usage counting service",
        "url": "https://www.canva.dev/blog/engineering/scaling-to-count-billions/",
        "topics": [
          "Architecture",
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "How Canva saves millions annually in Amazon S3 costs",
        "url": "https://www.canva.dev/blog/engineering/optimising-s3-savings/",
        "topics": [
          "Cost Optimization"
        ],
        "year": "2023"
      },
      {
        "id": 6,
        "title": "How Canva scaled media uploads from Zero to 50 Million per day",
        "url": "https://www.canva.dev/blog/engineering/from-zero-to-50-million-uploads-per-day-scaling-media-at-canva/",
        "topics": [
          "Performance",
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 7,
        "title": "Canva's fast and scalable reverse image search",
        "url": "https://www.canva.dev/blog/engineering/simple-fast-and-scalable-reverse-image-search-using-perceptual-hashes-and-dynamodb/",
        "topics": [
          "Search",
          "Databases"
        ],
        "year": "2022"
      },
      {
        "id": 8,
        "title": "How Canva enables real-time collaboration with RSocket",
        "url": "https://www.canva.dev/blog/engineering/enabling-real-time-collaboration-with-rsocket/",
        "topics": [
          "Messaging",
          "Architecture"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Coinbase",
    "blogUrl": "https://www.coinbase.com/blog/landing/engineering",
    "articles": [
      {
        "id": 1,
        "title": "How Coinbase Optimizes Network Requests",
        "url": "https://www.coinbase.com/blog/boosting-app-performance-strategies-to-optimize-network-requests",
        "topics": [
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "Accelerating Deep Learning Adoption at Coinbase",
        "url": "https://www.coinbase.com/blog/accelerating-deep-learning-adoption-at-coinbase",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Lessons from launching Enterprise-grade GenAI solutions at Coinbase",
        "url": "https://www.coinbase.com/blog/lessons-from-launching-enterprise-grade-genAI-solutions-at-Coinbase",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "How Coinbase Uses ML to Predict Traffic and Scale Databases",
        "url": "https://www.coinbase.com/blog/how-coinbase-is-using-machine-learning-to-predict",
        "topics": [
          "AI/ML",
          "Databases"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "Detecting Fraudulent Transactions at Coinbase",
        "url": "https://www.coinbase.com/blog/detecting-fraudulent-transactions-coinbase-scalable-blockchain-address-risk",
        "topics": [
          "Security"
        ],
        "year": "2023"
      },
      {
        "id": 6,
        "title": "Building a notification platform at Coinbase",
        "url": "https://www.coinbase.com/blog/building-a-notification-platform-at-coinbase",
        "topics": [
          "Messaging",
          "Architecture"
        ],
        "year": "2022"
      }
    ]
  },
  {
    "companyName": "Discord",
    "blogUrl": "https://blog.discord.com/",
    "articles": [
      {
        "id": 1,
        "title": "How Discord Reduced Websocket Traffic by 40%",
        "url": "https://discord.com/blog/how-discord-reduced-websocket-traffic-by-40-percent",
        "topics": [
          "Performance",
          "Messaging"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "How Discord Stores Trillions of Messages",
        "url": "https://discord.com/blog/how-discord-stores-trillions-of-messages",
        "topics": [
          "Databases"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "Pushing Discord's Limits with a Million+ Online Users in a Single Server",
        "url": "https://discord.com/blog/maxjourney-pushing-discords-limits-with-a-million-plus-online-users-in-a-single-server",
        "topics": [
          "Performance",
          "Infrastructure"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "How Discord uses ML to Build a Delightful Notification Experience",
        "url": "https://discord.com/blog/building-delightful-notifications-using-ml",
        "topics": [
          "AI/ML",
          "Messaging"
        ],
        "year": "2022"
      },
      {
        "id": 5,
        "title": "How Discord Creates Insights from Trillions of Data Points",
        "url": "https://discord.com/blog/how-discord-creates-insights-from-trillions-of-data-points",
        "topics": [
          "Data Engineering"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "DoorDash",
    "blogUrl": "https://careersatdoordash.com/engineering-blog/",
    "articles": [
      {
        "id": 1,
        "title": "How DoorDash Uses LLMs to transcribe restaurant menu photos",
        "url": "https://careersatdoordash.com/blog/doordash-llm-transcribe-menu/",
        "topics": [
          "AI/ML"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "How DoorDash leverages LLMs for better search retrieval",
        "url": "https://careersatdoordash.com/blog/how-doordash-leverages-llms-for-better-search-retrieval/",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Building DoorDash's product knowledge graph with large language models",
        "url": "https://careersatdoordash.com/blog/building-doordashs-product-knowledge-graph-with-large-language-models/",
        "topics": [
          "AI/ML",
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "DoorDash's in-house search engine",
        "url": "https://careersatdoordash.com/blog/introducing-doordashs-in-house-search-engine/",
        "topics": [
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "DoorDash's write-heavy scalable and reliable inventory platform",
        "url": "https://careersatdoordash.com/blog/how-doordash-designed-a-successful-write-heavy-scalable-and-reliable-inventory-platform/",
        "topics": [
          "Architecture",
          "Databases"
        ],
        "year": "2023"
      },
      {
        "id": 6,
        "title": "Doordash's scalable real time event processing with Kafka and Flink",
        "url": "https://careersatdoordash.com/blog/building-scalable-real-time-event-processing-with-kafka-and-flink/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2022"
      },
      {
        "id": 7,
        "title": "DoorDash's Lessons on Improving Performance on High-Traffic Web Pages",
        "url": "https://careersatdoordash.com/blog/doordashs-lessons-on-improving-performance-on-high-traffic-web-pages/",
        "topics": [
          "Performance",
          "Frontend"
        ],
        "year": "2022"
      },
      {
        "id": 8,
        "title": "How DoorDash Applied Client-Side Caching to Improve Feature Store Performance by 70%",
        "url": "https://careersatdoordash.com/blog/how-we-applied-client-side-caching/",
        "topics": [
          "Caching",
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 9,
        "title": "Building a Unified Chat Experience at DoorDash",
        "url": "https://careersatdoordash.com/blog/building-a-unified-chat-experience-at-doordash/",
        "topics": [
          "Messaging"
        ],
        "year": "2022"
      }
    ]
  },
  {
    "companyName": "Dropbox",
    "blogUrl": "https://dropbox.tech/",
    "articles": [
      {
        "id": 1,
        "title": "How Dropbox evolved its infrastructure through the messaging system model",
        "url": "https://dropbox.tech/infrastructure/infrastructure-messaging-system-model-async-platform-evolution",
        "topics": [
          "Architecture",
          "Messaging"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "Dropbox's scalable, consistent, metadata caching solution",
        "url": "https://dropbox.tech/infrastructure/meet-chrono-our-scalable-consistent-metadata-caching-solution",
        "topics": [
          "Caching"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Bringing AI-powered answers and summaries to file previews on the web",
        "url": "https://dropbox.tech/machine-learning/bringing-ai-powered-answers-and-summaries-to-file-previews-on-the-web",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "Dropbox's ML-powered file organization",
        "url": "https://dropbox.tech/machine-learning/smart-move-ml-ai-file-organization-automation",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "How Dropbox uses ML to identify date formats in file names",
        "url": "https://dropbox.tech/machine-learning/using-ml-to-identify-date-formats-in-file-names",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 6,
        "title": "How Dropbox optimizes payments with machine learning",
        "url": "https://dropbox.tech/machine-learning/optimizing-payments-with-machine-learning",
        "topics": [
          "AI/ML",
          "Payments"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "eBay",
    "blogUrl": "https://innovation.ebayinc.com/tech/",
    "articles": [
      {
        "id": 1,
        "title": "How ebay Exports Billion-Scale Graphs on Transactional Graph Databases",
        "url": "https://innovation.ebayinc.com/stories/how-we-export-billion-scale-graphs-on-transactional-graph-databases/",
        "topics": [
          "Databases"
        ],
        "year": "2023"
      },
      {
        "id": 2,
        "title": "eBay's Personalized User-Based Ranking Model for Recommendations",
        "url": "https://innovation.ebayinc.com/stories/evolving-recommendations-a-personalized-user-based-ranking-model/",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "How Multimodal Embeddings Elevate eBay's Product Recommendations",
        "url": "https://innovation.ebayinc.com/stories/beyond-words-how-multimodal-embeddings-elevate-ebays-product-recommendations/",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "eBay's Blazingly Fast Billion-Scale Vector Similarity Engine",
        "url": "https://innovation.ebayinc.com/stories/ebays-blazingly-fast-billion-scale-vector-similarity-engine/",
        "topics": [
          "Search",
          "Performance"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "How eBay Handles Real-Time Push Notifications at Scale",
        "url": "https://innovation.ebayinc.com/stories/ebays-notification-streaming-platform-how-ebay-handles-real-time-push-notifications-at-scale/",
        "topics": [
          "Messaging"
        ],
        "year": "2022"
      },
      {
        "id": 6,
        "title": "Building a Deep Learning Based Retrieval System for Personalized Recommendations",
        "url": "https://innovation.ebayinc.com/stories/building-a-deep-learning-based-retrieval-system-for-personalized-recommendations/",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2022"
      },
      {
        "id": 7,
        "title": "How eBay Loads and Updates Over Ten-Billion-Vertex Graphs",
        "url": "https://innovation.ebayinc.com/stories/graphload-a-framework-to-load-and-update-over-ten-billion-vertex-graphs-with-performance-and-consistency/",
        "topics": [
          "Databases",
          "Performance"
        ],
        "year": "2021"
      },
      {
        "id": 8,
        "title": "eBay's real-time and performant index service for its large-scale, in-house database platform",
        "url": "https://innovation.ebayinc.com/stories/ebays-global-secondary-indexes/",
        "topics": [
          "Databases"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Facebook/Meta",
    "blogUrl": "https://engineering.fb.com/",
    "articles": [
      {
        "id": 1,
        "title": "Indexing code at scale with Glean - Meta's open source system",
        "url": "https://engineering.fb.com/2024/12/19/developer-tools/glean-open-source-code-indexing/",
        "topics": [
          "Search",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "Inside Facebook's video delivery system",
        "url": "https://engineering.fb.com/2024/12/10/video-engineering/inside-facebooks-video-delivery-system/",
        "topics": [
          "Video/Media"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Meta's Sequence learning Model for personalized ads recommendations",
        "url": "https://engineering.fb.com/2024/11/19/data-infrastructure/sequence-learning-personalized-ads-recommendations/",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "How Meta animates AI-generated images at scale",
        "url": "https://engineering.fb.com/2024/08/14/production-engineering/how-meta-animates-ai-generated-images-at-scale/",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "How Meta trains large language models at scale",
        "url": "https://engineering.fb.com/2024/06/12/data-infrastructure/training-large-language-models-at-scale-meta/",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 6,
        "title": "Building Meta's GenAI Infrastructure",
        "url": "https://engineering.fb.com/2024/03/12/data-center-engineering/building-metas-genai-infrastructure/",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 7,
        "title": "RoCE networks for distributed AI training at scale",
        "url": "https://engineering.fb.com/2024/08/05/data-center-engineering/roce-network-distributed-ai-training-at-scale/",
        "topics": [
          "Infrastructure",
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 8,
        "title": "How Meta built the infrastructure for Threads",
        "url": "https://engineering.fb.com/2023/12/19/core-infra/how-meta-built-the-infrastructure-for-threads/",
        "topics": [
          "Infrastructure"
        ],
        "year": "2023"
      },
      {
        "id": 9,
        "title": "Building end-to-end security for Messenger",
        "url": "https://engineering.fb.com/2023/12/06/security/building-end-to-end-security-for-messenger/",
        "topics": [
          "Security"
        ],
        "year": "2023"
      },
      {
        "id": 10,
        "title": "Modernizing Meta's data platform",
        "url": "https://engineering.fb.com/2023/01/26/data-infrastructure/tulip-modernizing-metas-data-platform/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2023"
      },
      {
        "id": 11,
        "title": "How Precision Time Protocol is being deployed at Meta",
        "url": "https://engineering.fb.com/2022/11/21/production-engineering/precision-time-protocol-at-meta/",
        "topics": [
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 12,
        "title": "Scaling data ingestion for machine learning training at Meta",
        "url": "https://engineering.fb.com/2022/09/19/ml-applications/data-ingestion-machine-learning-training-meta/",
        "topics": [
          "AI/ML",
          "Data Engineering"
        ],
        "year": "2022"
      },
      {
        "id": 13,
        "title": "Meta's cloud gaming infrastructure",
        "url": "https://engineering.fb.com/2022/06/09/web/cloud-gaming-infrastructure/",
        "topics": [
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 14,
        "title": "Cache made consistent - How Meta handles cache invalidation",
        "url": "https://engineering.fb.com/2022/06/08/core-infra/cache-made-consistent/",
        "topics": [
          "Caching"
        ],
        "year": "2022"
      },
      {
        "id": 15,
        "title": "A highly available, strongly consistent storage service using chain replication",
        "url": "https://engineering.fb.com/2022/05/04/data-infrastructure/delta/",
        "topics": [
          "Databases",
          "Architecture"
        ],
        "year": "2022"
      },
      {
        "id": 16,
        "title": "Making a distributed priority queue disaster-ready",
        "url": "https://engineering.fb.com/2022/01/18/production-engineering/foqs-disaster-ready/",
        "topics": [
          "Architecture"
        ],
        "year": "2022"
      },
      {
        "id": 17,
        "title": "How we built a general purpose key value store for Facebook with ZippyDB",
        "url": "https://engineering.fb.com/2021/08/06/core-infra/zippydb/",
        "topics": [
          "Databases"
        ],
        "year": "2021"
      },
      {
        "id": 18,
        "title": "Fully Sharded Data Parallel: faster AI training with fewer GPUs",
        "url": "https://engineering.fb.com/2021/07/15/open-source/fsdp/",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2021"
      },
      {
        "id": 19,
        "title": "How Facebook encodes your videos",
        "url": "https://engineering.fb.com/2021/04/05/video-engineering/how-facebook-encodes-your-videos/",
        "topics": [
          "Video/Media"
        ],
        "year": "2021"
      },
      {
        "id": 20,
        "title": "Scaling a distributed priority queue at Meta",
        "url": "https://engineering.fb.com/2021/02/22/production-engineering/foqs-scaling-a-distributed-priority-queue/",
        "topics": [
          "Architecture"
        ],
        "year": "2021"
      },
      {
        "id": 21,
        "title": "How machine learning powers Facebook's News Feed ranking algorithm",
        "url": "https://engineering.fb.com/2021/01/26/ml-applications/news-feed-ranking/",
        "topics": [
          "AI/ML"
        ],
        "year": "2021"
      },
      {
        "id": 22,
        "title": "How Meta scaled Live streaming for millions of viewers simultaneously",
        "url": "https://engineering.fb.com/2020/10/22/video-engineering/live-streaming/",
        "topics": [
          "Video/Media",
          "Performance"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Figma",
    "blogUrl": "https://www.figma.com/blog/engineering/",
    "articles": [
      {
        "id": 1,
        "title": "The infrastructure behind AI search in Figma",
        "url": "https://www.figma.com/blog/the-infrastructure-behind-ai-search-in-figma/",
        "topics": [
          "Search",
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "Speeding up file load times at Figma",
        "url": "https://www.figma.com/blog/speeding-up-file-load-times-one-page-at-a-time/",
        "topics": [
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Figma's LiveGraph: a real-time data system at scale",
        "url": "https://www.figma.com/blog/livegraph-real-time-data-at-scale/",
        "topics": [
          "Architecture",
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "How Figma horizontally scaled Postgres to unlock nearly infinite scalability",
        "url": "https://www.figma.com/blog/how-figmas-databases-team-lived-to-tell-the-scale/",
        "topics": [
          "Databases"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "How Figma improved performance and load time with incremental frame loading",
        "url": "https://www.figma.com/blog/incremental-frame-loading/",
        "topics": [
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 6,
        "title": "How Figma reduced potential instability by scaling to multiple databases",
        "url": "https://www.figma.com/blog/how-figma-scaled-to-multiple-databases/",
        "topics": [
          "Databases"
        ],
        "year": "2023"
      },
      {
        "id": 7,
        "title": "The hidden challenges of autosave",
        "url": "https://www.figma.com/blog/behind-the-feature-autosave/",
        "topics": [
          "Architecture"
        ],
        "year": "2020"
      },
      {
        "id": 8,
        "title": "Figma's deep search to find the right files even faster",
        "url": "https://www.figma.com/blog/deep-search/",
        "topics": [
          "Search"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Flipkart",
    "blogUrl": "https://blog.flipkart.tech/",
    "articles": [
      {
        "id": 1,
        "title": "Flipkart's MySQL Highly Available Setup",
        "url": "https://blog.flipkart.tech/mysql-high-availability-5f71838f19e1",
        "topics": [
          "Databases"
        ],
        "year": "2023"
      },
      {
        "id": 2,
        "title": "Running a multi-region Zookeeper at Flipkart",
        "url": "https://blog.flipkart.tech/running-a-multi-region-zookeeper-58e52cec44ff",
        "topics": [
          "Infrastructure"
        ],
        "year": "2021"
      },
      {
        "id": 3,
        "title": "Memory Tuning a High Throughput Microservice",
        "url": "https://blog.flipkart.tech/memory-tuning-a-high-throughput-microservice-ed57b3e60997",
        "topics": [
          "Performance"
        ],
        "year": "2021"
      },
      {
        "id": 4,
        "title": "Building Flipkart's Personalized Search Autosuggestion",
        "url": "https://blog.flipkart.tech/building-personalized-autosuggestion-9e705d5bf5f8",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2021"
      },
      {
        "id": 5,
        "title": "Predicting your next query even before you type!",
        "url": "https://blog.flipkart.tech/predicting-your-next-query-even-before-you-type-83487a34109d",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2021"
      },
      {
        "id": 6,
        "title": "How Flipkart Adapted Search to Indian Phonetics",
        "url": "https://blog.flipkart.tech/adapting-search-to-indian-phonetics-cdbe65259686",
        "topics": [
          "Search"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "GitHub",
    "blogUrl": "https://github.blog/engineering/",
    "articles": [
      {
        "id": 1,
        "title": "How we improved push processing on GitHub",
        "url": "https://github.blog/engineering/architecture-optimization/how-we-improved-push-processing-on-github/",
        "topics": [
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "How GitHub uses merge queue to ship hundreds of changes every day",
        "url": "https://github.blog/engineering/engineering-principles/how-github-uses-merge-queue-to-ship-hundreds-of-changes-every-day/",
        "topics": [
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "How GitHub Docs' new search works",
        "url": "https://github.blog/engineering/architecture-optimization/how-github-docs-new-search-works/",
        "topics": [
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "The technology behind GitHub's new code search",
        "url": "https://github.blog/engineering/architecture-optimization/the-technology-behind-githubs-new-code-search/",
        "topics": [
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "Scaling Git's garbage collection",
        "url": "https://github.blog/engineering/architecture-optimization/scaling-gits-garbage-collection/",
        "topics": [
          "Performance"
        ],
        "year": "2022"
      },
      {
        "id": 6,
        "title": "Improve Git monorepo performance with a file system monitor",
        "url": "https://github.blog/engineering/infrastructure/improve-git-monorepo-performance-with-a-file-system-monitor/",
        "topics": [
          "Performance",
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 7,
        "title": "Partitioning GitHub's relational databases to handle scale",
        "url": "https://github.blog/engineering/infrastructure/partitioning-githubs-relational-databases-scale/",
        "topics": [
          "Databases"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Google Research",
    "blogUrl": "https://research.google/blog/",
    "articles": [
      {
        "id": 1,
        "title": "Load balancing with random job arrivals",
        "url": "https://research.google/blog/load-balancing-with-random-job-arrivals/",
        "topics": [
          "Infrastructure"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "Transformers in music recommendation",
        "url": "https://research.google/blog/transformers-in-music-recommendation/",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Scaling multimodal understanding to long videos",
        "url": "https://research.google/blog/scaling-multimodal-understanding-to-long-videos/",
        "topics": [
          "AI/ML",
          "Video/Media"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "Answering billions of reporting queries each day with low latency",
        "url": "https://research.google/blog/answering-billions-of-reporting-queries-each-day-with-low-latency/",
        "topics": [
          "Databases",
          "Performance"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "Grammar checking at Google Search scale",
        "url": "https://research.google/blog/grammar-checking-at-google-search-scale/",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 6,
        "title": "World scale inverse reinforcement learning in Google Maps",
        "url": "https://research.google/blog/world-scale-inverse-reinforcement-learning-in-google-maps/",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 7,
        "title": "Resolving code review comments with ML",
        "url": "https://research.google/blog/resolving-code-review-comments-with-ml/",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      }
    ]
  },
  {
    "companyName": "Instagram",
    "blogUrl": "https://engineering.fb.com/tag/instagram/",
    "articles": [
      {
        "id": 1,
        "title": "Scaling the Instagram Explore recommendations system",
        "url": "https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 2,
        "title": "Reducing Instagram's basic video compute time by 94 percent",
        "url": "https://engineering.fb.com/2022/11/04/video-engineering/instagram-video-processing-encoding-reduction/",
        "topics": [
          "Video/Media",
          "Performance"
        ],
        "year": "2022"
      },
      {
        "id": 3,
        "title": "Improving Instagram notification management with machine learning and causal inference",
        "url": "https://engineering.fb.com/2022/10/31/ml-applications/instagram-notification-management-machine-learning/",
        "topics": [
          "AI/ML",
          "Messaging"
        ],
        "year": "2022"
      },
      {
        "id": 4,
        "title": "Building text animations for Instagram Stories",
        "url": "https://engineering.fb.com/2022/07/18/developer-tools/building-text-animations-for-instagram-stories/",
        "topics": [
          "Frontend"
        ],
        "year": "2022"
      },
      {
        "id": 5,
        "title": "Pushing the limits of compression in Facebook's mobile apps",
        "url": "https://engineering.fb.com/2021/09/13/core-infra/superpack/",
        "topics": [
          "Mobile",
          "Performance"
        ],
        "year": "2021"
      },
      {
        "id": 6,
        "title": "How Instagram suggests new content",
        "url": "https://engineering.fb.com/2020/12/10/web/how-instagram-suggests-new-content/",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Instacart",
    "blogUrl": "https://tech.instacart.com/",
    "articles": [
      {
        "id": 1,
        "title": "Real-time Fraud Detection with Yoda and ClickHouse",
        "url": "https://tech.instacart.com/real-time-fraud-detection-with-yoda-and-clickhouse-bd08e9dbe3f4",
        "topics": [
          "Security",
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "How Instacart Uses ML to Suggest Replacements for Out-of-Stock Products",
        "url": "https://tech.instacart.com/how-instacart-uses-machine-learning-to-suggest-replacements-for-out-of-stock-products-8f80d03bb5af",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Sequence models for Contextual Recommendations at Instacart",
        "url": "https://tech.instacart.com/sequence-models-for-contextual-recommendations-at-instacart-93414a28e70c",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "Supercharging Discovery in Search with LLMs",
        "url": "https://tech.instacart.com/supercharging-discovery-in-search-with-llms-556c585d4720",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "Optimizing search relevance at Instacart using hybrid retrieval",
        "url": "https://tech.instacart.com/optimizing-search-relevance-at-instacart-using-hybrid-retrieval-88cb579b959c",
        "topics": [
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 6,
        "title": "Instacart's Item Availability Architecture: Solving for scale and consistency",
        "url": "https://tech.instacart.com/instacarts-item-availability-architecture-solving-for-scale-and-consistency-f5661acb20a6",
        "topics": [
          "Architecture"
        ],
        "year": "2023"
      },
      {
        "id": 7,
        "title": "Instacart's one Deep Learning model for multiple surfaces",
        "url": "https://tech.instacart.com/one-model-to-serve-them-all-0eb6bf60b00d",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 8,
        "title": "Distributed Machine Learning at Instacart",
        "url": "https://tech.instacart.com/distributed-machine-learning-at-instacart-4b11d7569423",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2023"
      },
      {
        "id": 9,
        "title": "How Instacart Uses Embeddings to Improve Search Relevance",
        "url": "https://tech.instacart.com/how-instacart-uses-embeddings-to-improve-search-relevance-e569839c3c36",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2022"
      },
      {
        "id": 10,
        "title": "The Journey to Real-Time Machine Learning at Instacart",
        "url": "https://tech.instacart.com/lessons-learned-the-journey-to-real-time-machine-learning-at-instacart-942f3a656af3",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 11,
        "title": "How Instacart Uses ML-Driven Autocomplete to Help People Fill Their Carts",
        "url": "https://tech.instacart.com/how-instacart-uses-machine-learning-driven-autocomplete-to-help-people-fill-their-carts-9bc56d22bafb",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2022"
      },
      {
        "id": 12,
        "title": "How Instacart optimized its Logistics engine using ML",
        "url": "https://tech.instacart.com/dont-let-the-crow-guide-your-routes-f24c96daedba",
        "topics": [
          "AI/ML"
        ],
        "year": "2021"
      },
      {
        "id": 13,
        "title": "A simple search query correction heuristic for the resource-constrained",
        "url": "https://tech.instacart.com/avacado-or-avocado-4b4b78dc0698",
        "topics": [
          "Search"
        ],
        "year": "2020"
      },
      {
        "id": 14,
        "title": "Predicting the real-time availability of 200 million grocery items",
        "url": "https://tech.instacart.com/predicting-real-time-availability-of-200-million-grocery-items-in-us-canada-stores-61f43a16eafe",
        "topics": [
          "AI/ML"
        ],
        "year": "2018"
      },
      {
        "id": 15,
        "title": "How Instacart delivers on time",
        "url": "https://tech.instacart.com/how-instacart-delivers-on-time-using-quantile-regression-2383e2e03edb",
        "topics": [
          "AI/ML"
        ],
        "year": "2018"
      }
    ]
  },
  {
    "companyName": "LinkedIn",
    "blogUrl": "https://engineering.linkedin.com/blog",
    "articles": [
      {
        "id": 1,
        "title": "Scalable federated learning at LinkedIn",
        "url": "https://www.linkedin.com/blog/engineering/machine-learning/scalable-federated-learning-at-linkedin",
        "topics": [
          "AI/ML"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "Building a resilient DNS client for web-scale infrastructure",
        "url": "https://www.linkedin.com/blog/engineering/infrastructure/building-a-resilient-dns-client-for-web-scale-infrastructure",
        "topics": [
          "Infrastructure"
        ],
        "year": "2025"
      },
      {
        "id": 3,
        "title": "Journey of next generation control plane for data systems",
        "url": "https://www.linkedin.com/blog/engineering/infrastructure/journey-of-next-generation-control-plane-for-data-systems",
        "topics": [
          "Infrastructure",
          "Data Engineering"
        ],
        "year": "2025"
      },
      {
        "id": 4,
        "title": "Candidate Generation in a Large Scale Graph Recommendation System",
        "url": "https://www.linkedin.com/blog/engineering/recommendations/candidate-generation-in-a-large-scale-graph-recommendation-system-people-you-may-know",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "Accelerating LinkedIn's My Network tab by reducing latency and improving UX",
        "url": "https://www.linkedin.com/blog/engineering/infrastructure/accelerating-linkedins-my-network-tab",
        "topics": [
          "Performance",
          "Frontend"
        ],
        "year": "2024"
      },
      {
        "id": 6,
        "title": "Tuning Java for high-performance services",
        "url": "https://www.linkedin.com/blog/engineering/infrastructure/java-heap-memory-and-garbage-collection-tuning-for-high-performance-services",
        "topics": [
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 7,
        "title": "LinkedIn OpenHouse for Big Data Management",
        "url": "https://www.linkedin.com/blog/engineering/data-management/taking-charge-of-tables--introducing-openhouse-for-big-data-mana",
        "topics": [
          "Data Engineering"
        ],
        "year": "2023"
      },
      {
        "id": 8,
        "title": "How LinkedIn Adopted A GraphQL Architecture for Product Development",
        "url": "https://www.linkedin.com/blog/engineering/architecture/how-linkedin-adopted-a-graphql-architecture-for-product-developm",
        "topics": [
          "Architecture"
        ],
        "year": "2023"
      },
      {
        "id": 9,
        "title": "How LinkedIn Is Using Embeddings to Up Its Match Game for Job Seekers",
        "url": "https://www.linkedin.com/blog/engineering/platform-platformization/using-embeddings-to-up-its-match-game-for-job-seekers",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 10,
        "title": "Building the Infrastructure for Delivering Labor Market Insights from LinkedIn Data",
        "url": "https://www.linkedin.com/blog/engineering/economic-graph/from-the-economic-graph-to-economic-insights-building-the-infra",
        "topics": [
          "Data Engineering"
        ],
        "year": "2023"
      },
      {
        "id": 11,
        "title": "Upscaling LinkedIn's Profile Datastore While Reducing Costs",
        "url": "https://www.linkedin.com/blog/engineering/data-management/upscaling-profile-datastore-while-reducing-costs",
        "topics": [
          "Databases",
          "Cost Optimization"
        ],
        "year": "2023"
      },
      {
        "id": 12,
        "title": "Unifying Messaging Experiences across LinkedIn",
        "url": "https://www.linkedin.com/blog/engineering/messaging-notifications/unifying-messaging-experiences-across-linkedin",
        "topics": [
          "Messaging"
        ],
        "year": "2023"
      },
      {
        "id": 13,
        "title": "Applying multitask learning to AI models at LinkedIn",
        "url": "https://www.linkedin.com/blog/engineering/data-modeling/applying-multitask-learning-to-ai-models-at-linkedin",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 14,
        "title": "Building a mutable dataset in data lake",
        "url": "https://www.linkedin.com/blog/engineering/data-management/opal-building-a-mutable-dataset-in-data-lake",
        "topics": [
          "Data Engineering"
        ],
        "year": "2022"
      },
      {
        "id": 15,
        "title": "Completing a member knowledge graph with Graph Neural Networks",
        "url": "https://www.linkedin.com/blog/engineering/knowledge/completing-a-member-knowledge-graph-with-graph-neural-networks",
        "topics": [
          "AI/ML"
        ],
        "year": "2021"
      },
      {
        "id": 16,
        "title": "Homepage feed multi-task learning using TensorFlow",
        "url": "https://www.linkedin.com/blog/engineering/feed/homepage-feed-multi-task-learning-using-tensorflow",
        "topics": [
          "AI/ML"
        ],
        "year": "2021"
      },
      {
        "id": 17,
        "title": "Evolving LinkedIn's analytics tech stack",
        "url": "https://www.linkedin.com/blog/engineering/analytics/evolving-linkedin-s-analytics-tech-stack",
        "topics": [
          "Data Engineering"
        ],
        "year": "2021"
      },
      {
        "id": 18,
        "title": "Scaling LinkedIn's Hadoop YARN cluster beyond 10,000 nodes",
        "url": "https://www.linkedin.com/blog/engineering/open-source/scaling-linkedin-s-hadoop-yarn-cluster-beyond-10-000-nodes",
        "topics": [
          "Infrastructure",
          "Data Engineering"
        ],
        "year": "2021"
      },
      {
        "id": 19,
        "title": "HTTP/2 in infrastructure: Ambry network stack refactoring",
        "url": "https://www.linkedin.com/blog/engineering/optimization/http-2-in-infrastructure-ambry-network-stack-refactoring",
        "topics": [
          "Infrastructure",
          "Performance"
        ],
        "year": "2021"
      },
      {
        "id": 20,
        "title": "Building a heterogeneous social network recommendation system",
        "url": "https://www.linkedin.com/blog/engineering/optimization/building-a-heterogeneous-social-network-recommendation-system",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Lyft",
    "blogUrl": "https://eng.lyft.com/",
    "articles": [
      {
        "id": 1,
        "title": "From Big Data to Better Data: Ensuring Data Quality with Verity",
        "url": "https://eng.lyft.com/from-big-data-to-better-data-ensuring-data-quality-with-verity-a996b49343f6",
        "topics": [
          "Data Engineering"
        ],
        "year": "2023"
      },
      {
        "id": 2,
        "title": "Building Real-time Machine Learning Foundations at Lyft",
        "url": "https://eng.lyft.com/building-real-time-machine-learning-foundations-at-lyft-6dd99b385a4e",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "The Recommendation System at Lyft",
        "url": "https://eng.lyft.com/the-recommendation-system-at-lyft-67bc9dcc1793",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "lyft2vec \u2014 Embeddings at Lyft",
        "url": "https://eng.lyft.com/lyft2vec-embeddings-at-lyft-d4231a76d219",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "Powering Millions of Real-Time Decisions with LyftLearn Serving",
        "url": "https://eng.lyft.com/powering-millions-of-real-time-decisions-with-lyftlearn-serving-9bb1f73318dc",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2023"
      },
      {
        "id": 6,
        "title": "Pricing at Lyft",
        "url": "https://eng.lyft.com/pricing-at-lyft-8a4022065f8b",
        "topics": [
          "Architecture"
        ],
        "year": "2022"
      },
      {
        "id": 7,
        "title": "ML Model Training Infrastructure built on Kubernetes",
        "url": "https://eng.lyft.com/lyftlearn-ml-model-training-infrastructure-built-on-kubernetes-aef8218842bb",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2021"
      },
      {
        "id": 8,
        "title": "Elasticsearch Optimizations at Lyft",
        "url": "https://eng.lyft.com/elasticsearch-optimizations-at-lyft-b555dc020932",
        "topics": [
          "Search",
          "Performance"
        ],
        "year": "2021"
      },
      {
        "id": 9,
        "title": "How Lyft discovered OpenStreetMap is the Freshest Map for Rideshare",
        "url": "https://eng.lyft.com/how-lyft-discovered-openstreetmap-is-the-freshest-map-for-rideshare-a7a41bf92ec",
        "topics": [
          "Data Engineering"
        ],
        "year": "2021"
      },
      {
        "id": 10,
        "title": "Using Client-Side Map Data to Improve Real-Time Positioning",
        "url": "https://eng.lyft.com/using-client-side-map-data-to-improve-real-time-positioning-a382585ac6e",
        "topics": [
          "Mobile"
        ],
        "year": "2021"
      },
      {
        "id": 11,
        "title": "How Lyft predicts a rider's destination for better in-app experience",
        "url": "https://eng.lyft.com/how-lyft-predicts-your-destination-with-attention-791146b0a439",
        "topics": [
          "AI/ML"
        ],
        "year": "2020"
      },
      {
        "id": 12,
        "title": "A New Real-Time Map-Matching Algorithm at Lyft",
        "url": "https://eng.lyft.com/a-new-real-time-map-matching-algorithm-at-lyft-da593ab7b006",
        "topics": [
          "AI/ML"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Netflix",
    "blogUrl": "https://netflixtechblog.com/",
    "articles": [
      {
        "id": 1,
        "title": "Foundation Model for Personalized Recommendation",
        "url": "https://netflixtechblog.com/foundation-model-for-personalized-recommendation-1a0bd8e02d39",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "How Netflix processes billions of impressions daily",
        "url": "https://netflixtechblog.com/introducing-impressions-at-netflix-e2b67c88c9fb",
        "topics": [
          "Data Engineering"
        ],
        "year": "2025"
      },
      {
        "id": 3,
        "title": "Netflix's Distributed Counter Abstraction",
        "url": "https://netflixtechblog.com/netflixs-distributed-counter-abstraction-8d0c45eb66b2",
        "topics": [
          "Architecture"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "Evolving Netflix's WebSocket proxy for the future",
        "url": "https://netflixtechblog.com/pushy-to-the-limit-evolving-netflixs-websocket-proxy-for-the-future-b468bc0ff658",
        "topics": [
          "Messaging",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "Netflix's Key-Value Data Abstraction Layer",
        "url": "https://netflixtechblog.com/introducing-netflixs-key-value-data-abstraction-layer-1ea8a0a11b30",
        "topics": [
          "Databases"
        ],
        "year": "2024"
      },
      {
        "id": 6,
        "title": "Netflix's TimeSeries Data Abstraction Layer",
        "url": "https://netflixtechblog.com/introducing-netflix-timeseries-data-abstraction-layer-31552f6326f8",
        "topics": [
          "Databases"
        ],
        "year": "2024"
      },
      {
        "id": 7,
        "title": "Recommending for Long-Term Member Satisfaction at Netflix",
        "url": "https://netflixtechblog.com/recommending-for-long-term-member-satisfaction-at-netflix-ac15cada49ef",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 8,
        "title": "Maestro: Data/ML Workflow Orchestrator at Netflix",
        "url": "https://netflixtechblog.com/maestro-netflixs-workflow-orchestrator-ee13a06f9c78",
        "topics": [
          "Data Engineering",
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 9,
        "title": "Reverse Searching Netflix's Federated Graph",
        "url": "https://netflixtechblog.com/reverse-searching-netflixs-federated-graph-222ac5d23576",
        "topics": [
          "Architecture",
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 10,
        "title": "Supporting Diverse ML Systems at Netflix",
        "url": "https://netflixtechblog.com/supporting-diverse-ml-systems-at-netflix-2d2e6b6d205d",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 11,
        "title": "Rebuilding Netflix Video Processing Pipeline with Microservices",
        "url": "https://netflixtechblog.com/rebuilding-netflix-video-processing-pipeline-with-microservices-4e5e6310e359",
        "topics": [
          "Video/Media",
          "Architecture"
        ],
        "year": "2024"
      },
      {
        "id": 12,
        "title": "Building In-Video Search",
        "url": "https://netflixtechblog.com/building-in-video-search-936766f0017c",
        "topics": [
          "Search",
          "Video/Media"
        ],
        "year": "2023"
      },
      {
        "id": 13,
        "title": "Streaming SQL in Data Mesh",
        "url": "https://netflixtechblog.com/streaming-sql-in-data-mesh-0d83f5a00d08",
        "topics": [
          "Data Engineering"
        ],
        "year": "2023"
      },
      {
        "id": 14,
        "title": "Migrating Netflix to GraphQL Safely",
        "url": "https://netflixtechblog.com/migrating-netflix-to-graphql-safely-8e1e4d4f1e72",
        "topics": [
          "Architecture"
        ],
        "year": "2023"
      },
      {
        "id": 15,
        "title": "Scaling Media Machine Learning at Netflix",
        "url": "https://netflixtechblog.com/scaling-media-machine-learning-at-netflix-f19b400243",
        "topics": [
          "AI/ML",
          "Video/Media"
        ],
        "year": "2023"
      },
      {
        "id": 16,
        "title": "Building a Media Understanding Platform for ML Innovations",
        "url": "https://netflixtechblog.com/building-a-media-understanding-platform-for-ml-innovations-9bef9962dcb7",
        "topics": [
          "AI/ML",
          "Video/Media"
        ],
        "year": "2023"
      },
      {
        "id": 17,
        "title": "Finding Cuts with Smooth Visual Transitions Using Machine Learning",
        "url": "https://netflixtechblog.com/match-cutting-at-netflix-finding-cuts-with-smooth-visual-transitions-31c3fc14ae59",
        "topics": [
          "AI/ML",
          "Video/Media"
        ],
        "year": "2022"
      },
      {
        "id": 18,
        "title": "Machine Learning for Fraud Detection in Streaming Services",
        "url": "https://netflixtechblog.com/machine-learning-for-fraud-detection-in-streaming-services-b0b4ef3be3f6",
        "topics": [
          "AI/ML",
          "Security"
        ],
        "year": "2022"
      },
      {
        "id": 19,
        "title": "Netflix's High-Throughput, Low-Latency Priority Queueing System",
        "url": "https://netflixtechblog.com/timestone-netflixs-high-throughput-low-latency-priority-queueing-system-with-built-in-support-1abf249ba95f",
        "topics": [
          "Architecture",
          "Performance"
        ],
        "year": "2022"
      },
      {
        "id": 20,
        "title": "Rapid Event Notification System at Netflix",
        "url": "https://netflixtechblog.com/rapid-event-notification-system-at-netflix-6deb1d2b57d1",
        "topics": [
          "Messaging"
        ],
        "year": "2022"
      },
      {
        "id": 21,
        "title": "Building Netflix's Distributed Tracing Infrastructure",
        "url": "https://netflixtechblog.com/building-netflixs-distributed-tracing-infrastructure-bb856c319304",
        "topics": [
          "Observability"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Notion",
    "blogUrl": "https://www.notion.com/blog",
    "articles": [
      {
        "id": 1,
        "title": "Building and scaling Notion's data lake",
        "url": "https://www.notion.com/blog/building-and-scaling-notions-data-lake",
        "topics": [
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "How we sped up Notion in the browser with WASM SQLite",
        "url": "https://www.notion.com/blog/how-we-sped-up-notion-in-the-browser-with-wasm-sqlite",
        "topics": [
          "Performance",
          "Frontend"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "The Great Re-shard: adding Postgres capacity (again) with zero downtime",
        "url": "https://www.notion.com/blog/the-great-re-shard",
        "topics": [
          "Databases"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "Creating the Notion API",
        "url": "https://www.notion.com/blog/creating-the-notion-api",
        "topics": [
          "Architecture"
        ],
        "year": "2022"
      },
      {
        "id": 5,
        "title": "The data model behind Notion's flexibility",
        "url": "https://www.notion.com/blog/data-model-behind-notion",
        "topics": [
          "Architecture",
          "Databases"
        ],
        "year": "2021"
      },
      {
        "id": 6,
        "title": "Lessons learned from sharding Postgres at Notion",
        "url": "https://www.notion.com/blog/sharding-postgres-at-notion",
        "topics": [
          "Databases"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "PayPal",
    "blogUrl": "https://medium.com/paypal-tech",
    "articles": [
      {
        "id": 1,
        "title": "Scaling PayPal's AI Capabilities with PayPal Cosmos.AI Platform",
        "url": "https://medium.com/paypal-tech/scaling-paypals-ai-capabilities-with-paypal-cosmos-ai-platform-e67a48e04691",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "Scaling Kafka to Support PayPal's Data Growth",
        "url": "https://medium.com/paypal-tech/scaling-kafka-to-support-paypals-data-growth-a0b4da420fab",
        "topics": [
          "Data Engineering"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "JunoDB: PayPal's Key-Value Store",
        "url": "https://medium.com/paypal-tech/unlocking-the-power-of-junodb-paypals-key-value-store-goes-open-source-ee85f935bdc1",
        "topics": [
          "Databases"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "Scaling Kubernetes to Over 4k Nodes and 200k Pods",
        "url": "https://medium.com/paypal-tech/scaling-kubernetes-to-over-4k-nodes-and-200k-pods-29988fad6ed",
        "topics": [
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 5,
        "title": "GraphQL at PayPal: An Adoption Story",
        "url": "https://medium.com/paypal-tech/graphql-at-paypal-an-adoption-story-b7e01175f2b7",
        "topics": [
          "Architecture"
        ],
        "year": "2021"
      },
      {
        "id": 6,
        "title": "How PayPal Uses Real-time Graph Database and Graph Analysis to Fight Fraud",
        "url": "https://medium.com/paypal-tech/how-paypal-uses-real-time-graph-database-and-graph-analysis-to-fight-fraud-96a2b918619a",
        "topics": [
          "Security",
          "Databases"
        ],
        "year": "2021"
      },
      {
        "id": 7,
        "title": "Next-Gen Data Movement Platform at PayPal",
        "url": "https://medium.com/paypal-tech/next-gen-data-movement-platform-at-paypal-100f70a7a6b",
        "topics": [
          "Data Engineering"
        ],
        "year": "2021"
      },
      {
        "id": 8,
        "title": "Deploying Large-scale Fraud Detection Machine Learning Models at PayPal",
        "url": "https://medium.com/paypal-tech/machine-learning-model-ci-cd-and-shadow-platform-8c4f44998c78",
        "topics": [
          "AI/ML",
          "Security"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Pinterest",
    "blogUrl": "https://medium.com/pinterest-engineering",
    "articles": [
      {
        "id": 1,
        "title": "How Pinterest improved Search Relevance using LLMs",
        "url": "https://medium.com/pinterest-engineering/improving-pinterest-search-relevance-using-large-language-models-4cd938d4e892",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "How Pinterest built it's Text-to-SQL feature",
        "url": "https://medium.com/pinterest-engineering/how-we-built-text-to-sql-at-pinterest-30bad30dabff",
        "topics": [
          "AI/ML",
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Change Data Capture at Pinterest",
        "url": "https://medium.com/pinterest-engineering/change-data-capture-at-pinterest-7e4c357ac527",
        "topics": [
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "Real Time Anomaly Detection at Pinterest",
        "url": "https://medium.com/pinterest-engineering/warden-real-time-anomaly-detection-at-pinterest-210c122f6afa",
        "topics": [
          "Observability"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "Improving Distributed Caching Performance and Efficiency at Pinterest",
        "url": "https://medium.com/pinterest-engineering/improving-distributed-caching-performance-and-efficiency-at-pinterest-92484b5fe39b",
        "topics": [
          "Caching"
        ],
        "year": "2022"
      },
      {
        "id": 6,
        "title": "How Pinterest Leverages Realtime User Actions to Boost Homefeed Engagement Volume",
        "url": "https://medium.com/pinterest-engineering/how-pinterest-leverages-realtime-user-actions-in-recommendation-to-boost-homefeed-engagement-volume-165ae2e8cde8",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2022"
      },
      {
        "id": 7,
        "title": "How Pinterest scaled the size of it's ad corpus by 60x",
        "url": "https://medium.com/pinterest-engineering/how-we-scaled-the-size-of-pinterests-ad-corpus-by-60x-d6d5bfa6bf16",
        "topics": [
          "Performance"
        ],
        "year": "2021"
      },
      {
        "id": 8,
        "title": "The machine learning behind delivering relevant ads",
        "url": "https://medium.com/pinterest-engineering/the-machine-learning-behind-delivering-relevant-ads-8987fc5ba1c0",
        "topics": [
          "AI/ML"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Quora",
    "blogUrl": "https://engineering.quora.com/",
    "articles": [
      {
        "id": 1,
        "title": "Building Embedding Search at Quora",
        "url": "https://quoraengineering.quora.com/Building-Embedding-Search-at-Quora",
        "topics": [
          "Search",
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "Migrating a decade of Redshift usages to Trino at Quora",
        "url": "https://quoraengineering.quora.com/Migrating-a-decade-of-Redshift-usages-to-Trino-at-Quora",
        "topics": [
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Trino at Quora Scale: Cost, Speed, and Reliability",
        "url": "https://quoraengineering.quora.com/Trino-at-Quora-Scale-Cost-Speed-and-Reliability",
        "topics": [
          "Data Engineering",
          "Performance"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "MySQL sharding at Quora",
        "url": "https://quoraengineering.quora.com/MySQL-sharding-at-Quora",
        "topics": [
          "Databases"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Razorpay",
    "blogUrl": "https://engineering.razorpay.com/",
    "articles": [
      {
        "id": 1,
        "title": "Razorpay's Authentication Revamp",
        "url": "https://engineering.razorpay.com/razorpays-authentication-revamp-turbocharging-performance-b8bb9d750fe8",
        "topics": [
          "Performance",
          "Security"
        ],
        "year": "2023"
      },
      {
        "id": 2,
        "title": "The Making of Razorpay Developer-Console",
        "url": "https://engineering.razorpay.com/the-making-of-developer-console-978018ce2aed",
        "topics": [
          "Frontend"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "How Razorpay Reduced Data Platform Cost by $2M",
        "url": "https://engineering.razorpay.com/reducing-data-platform-cost-by-2m-d8f82285c4ae",
        "topics": [
          "Cost Optimization"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "Reducing Kubernetes cost by $300,000 at Razorpay",
        "url": "https://engineering.razorpay.com/the-culture-of-cost-optimization-reducing-kubernetes-cost-by-300-000-32611cdd19d9",
        "topics": [
          "Cost Optimization",
          "Infrastructure"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "How does Razorpay Capital Detect Duplicate or Fraud Merchants?",
        "url": "https://engineering.razorpay.com/how-does-razorpay-capital-detect-duplicate-or-fraud-merchants-5ddc67e1535a",
        "topics": [
          "Security",
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 6,
        "title": "Razorpay's Real-Time Denormalized Data Streaming Platform",
        "url": "https://engineering.razorpay.com/real-time-denormalized-data-streaming-platform-part-3-optimisations-and-monitoring-5f7a58d9d97",
        "topics": [
          "Data Engineering"
        ],
        "year": "2023"
      },
      {
        "id": 7,
        "title": "How Razorpay's Notification Service Handles Increasing Load",
        "url": "https://engineering.razorpay.com/how-razorpays-notification-service-handles-increasing-load-f787623a490f",
        "topics": [
          "Messaging",
          "Performance"
        ],
        "year": "2022"
      },
      {
        "id": 8,
        "title": "How Trino and Alluxio power analytics at Razorpay",
        "url": "https://engineering.razorpay.com/how-trino-and-alluxio-power-analytics-at-razorpay-803d3386daaf",
        "topics": [
          "Data Engineering"
        ],
        "year": "2022"
      },
      {
        "id": 9,
        "title": "Handling Burst Traffic During IPL",
        "url": "https://engineering.razorpay.com/ipl-razorpays-second-innings-ae7c86b0894c",
        "topics": [
          "Performance",
          "Infrastructure"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Reddit",
    "blogUrl": "https://www.reddit.com/r/RedditEng/",
    "articles": [
      {
        "id": 1,
        "title": "Evolving Reddit's Media Infrastructure",
        "url": "https://www.reddit.com/r/RedditEng/comments/1k4o2mc/evolving_reddits_media_infrastructure/",
        "topics": [
          "Video/Media",
          "Infrastructure"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "Scaling our Apache Flink powered real-time ad event validation pipeline",
        "url": "https://www.reddit.com/r/RedditEng/comments/1ijcfge/scaling_our_apache_flink_powered_realtime_ad/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2025"
      },
      {
        "id": 3,
        "title": "Scaling Reddit's ad-serving system",
        "url": "https://www.reddit.com/r/RedditEng/comments/1gzua17/scaling_ads_serving_find_and_eliminate_redundant/",
        "topics": [
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "Product Candidate Generation for Reddit Dynamic Product Ads",
        "url": "https://www.reddit.com/r/RedditEng/comments/1gug4x9/product_candidate_generation_for_reddit_dynamic/",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "Scaling Ads Pacing: from Singleton to Sharded",
        "url": "https://www.reddit.com/r/RedditEng/comments/1e5mhs3/scaling_ads_pacing_from_singleton_to_sharded/",
        "topics": [
          "Architecture"
        ],
        "year": "2024"
      },
      {
        "id": 6,
        "title": "Introducing a Global Retrieval Ranking Model in the Ads Funnel",
        "url": "https://www.reddit.com/r/RedditEng/comments/1d2wfsd/introducing_a_global_retrieval_ranking_model_in/",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 7,
        "title": "Building an Experiment-Based Routing Service",
        "url": "https://www.reddit.com/r/RedditEng/comments/1c4pkql/building_an_experimentbased_routing_service/",
        "topics": [
          "Architecture"
        ],
        "year": "2023"
      },
      {
        "id": 8,
        "title": "The Reddit Media Metadata Store",
        "url": "https://www.reddit.com/r/RedditEng/comments/1avlywv/the_reddit_media_metadata_store/",
        "topics": [
          "Video/Media",
          "Databases"
        ],
        "year": "2023"
      }
    ]
  },
  {
    "companyName": "Salesforce",
    "blogUrl": "https://engineering.salesforce.com/",
    "articles": [
      {
        "id": 1,
        "title": "Scaling Real-Time Search to 30 Billion Queries with Sub-Second Latency and 0% Downtime",
        "url": "https://engineering.salesforce.com/scaling-real-time-search-to-30-billion-queries-with-sub-second-latency-and-0-downtime/",
        "topics": [
          "Search",
          "Performance"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "Scaling Agentic AI Powering 2 Billion Predictions Monthly",
        "url": "https://engineering.salesforce.com/agentforce-scaling-agentic-ai-for-enterprise-automation-observability-powering-2-billion-predictions-monthly/",
        "topics": [
          "AI/ML"
        ],
        "year": "2025"
      },
      {
        "id": 3,
        "title": "How Agentforce Data Library Powers RAG with 99.99% Uptime",
        "url": "https://engineering.salesforce.com/optimizing-ai-retrieval-how-agentforce-data-library-powers-rag-with-99-99-uptime/",
        "topics": [
          "AI/ML"
        ],
        "year": "2025"
      },
      {
        "id": 4,
        "title": "Secrets for Managing 100,000 Training and Metadata Requests Per Minute",
        "url": "https://engineering.salesforce.com/scaling-ai-systems-secrets-for-managing-100000-training-and-metadata-requests-per-minute/",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "Inside the Brain of Agentforce",
        "url": "https://engineering.salesforce.com/inside-the-brain-of-agentforce-revealing-the-atlas-reasoning-engine/",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 6,
        "title": "How Salesforce Supports Millions of Users Seamlessly for GenAI",
        "url": "https://engineering.salesforce.com/scaling-generative-ai-how-salesforce-supports-millions-of-users-seamlessly/",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 7,
        "title": "Inside Salesforce's Scalable Time Series Forecasting AI Platform",
        "url": "https://engineering.salesforce.com/inside-salesforces-scalable-time-series-forecasting-ai-platform/",
        "topics": [
          "AI/ML",
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 8,
        "title": "How Salesforce's Data Cloud Handles 250 Trillion Transactions Weekly",
        "url": "https://engineering.salesforce.com/the-unstructured-data-dilemma-how-data-cloud-handles-250-trillion-transactions-weekly/",
        "topics": [
          "Data Engineering",
          "Performance"
        ],
        "year": "2024"
      }
    ]
  },
  {
    "companyName": "Shopify",
    "blogUrl": "https://shopify.engineering/",
    "articles": [
      {
        "id": 1,
        "title": "How Shopify improved consumer search intent with real-time ML",
        "url": "https://shopify.engineering/how-shopify-improved-consumer-search-intent-with-real-time-ml",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "Horizontally scaling the Rails backend of Shop app with Vitess",
        "url": "https://shopify.engineering/horizontally-scaling-the-rails-backend-of-shop-app-with-vitess",
        "topics": [
          "Databases",
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Improving Shopify App's Performance",
        "url": "https://shopify.engineering/improving-shopify-app-s-performance",
        "topics": [
          "Performance",
          "Mobile"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "Building a ShopifyQL Code Editor",
        "url": "https://shopify.engineering/building-a-shopifyql-code-editor",
        "topics": [
          "Frontend"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "Creating a Flexible Order Routing System with Shopify Functions",
        "url": "https://shopify.engineering/creating-a-flexible-order-routing-system-with-shopify-functions",
        "topics": [
          "Architecture"
        ],
        "year": "2023"
      },
      {
        "id": 6,
        "title": "Using Server Sent Events to Simplify Real-time Streaming at Scale",
        "url": "https://shopify.engineering/server-sent-events-data-streaming",
        "topics": [
          "Architecture",
          "Data Engineering"
        ],
        "year": "2022"
      },
      {
        "id": 7,
        "title": "Capturing Every Change From Shopify's Sharded Monolith",
        "url": "https://shopify.engineering/capturing-every-change-shopify-sharded-monolith",
        "topics": [
          "Data Engineering",
          "Architecture"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Slack",
    "blogUrl": "https://slack.engineering/",
    "articles": [
      {
        "id": 1,
        "title": "How Slack Optimizes its E2E Pipeline",
        "url": "https://slack.engineering/speedup-e2e-testing/",
        "topics": [
          "Infrastructure"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "How Slack built enterprise search to be secure and private",
        "url": "https://slack.engineering/how-we-built-enterprise-search-to-be-secure-and-private/",
        "topics": [
          "Search",
          "Security"
        ],
        "year": "2025"
      },
      {
        "id": 3,
        "title": "Advancing Our Chef Infrastructure",
        "url": "https://slack.engineering/advancing-our-chef-infrastructure/",
        "topics": [
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "How We Re-Architected Slack for Our Largest Customers",
        "url": "https://slack.engineering/unified-grid-how-we-re-architected-slack-for-our-largest-customers/",
        "topics": [
          "Architecture"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "How Slack automatically detects stolen session cookies",
        "url": "https://slack.engineering/catching-compromised-cookies/",
        "topics": [
          "Security"
        ],
        "year": "2024"
      },
      {
        "id": 6,
        "title": "How a request flows \u2014 from a Slack's user perspective",
        "url": "https://slack.engineering/traffic-101-packets-mostly-flow/",
        "topics": [
          "Architecture"
        ],
        "year": "2023"
      },
      {
        "id": 7,
        "title": "Slack's Migration to a Cellular Architecture",
        "url": "https://slack.engineering/slacks-migration-to-a-cellular-architecture/",
        "topics": [
          "Architecture"
        ],
        "year": "2023"
      },
      {
        "id": 8,
        "title": "Real-time Messaging at Slack",
        "url": "https://slack.engineering/real-time-messaging/",
        "topics": [
          "Messaging"
        ],
        "year": "2023"
      },
      {
        "id": 9,
        "title": "How Slack traces the flow of notifications across systems",
        "url": "https://slack.engineering/tracing-notifications/",
        "topics": [
          "Observability",
          "Messaging"
        ],
        "year": "2023"
      },
      {
        "id": 10,
        "title": "Slack's Unified end-to-end machine learning infrastructure to generate recommendations",
        "url": "https://slack.engineering/recommend-api/",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 11,
        "title": "How We Design Our APIs at Slack",
        "url": "https://slack.engineering/how-we-design-our-apis-at-slack/",
        "topics": [
          "Architecture"
        ],
        "year": "2021"
      },
      {
        "id": 12,
        "title": "How we built an eventually-consistent data model to predict Slack Connect invites",
        "url": "https://slack.engineering/email-classification/",
        "topics": [
          "AI/ML",
          "Architecture"
        ],
        "year": "2021"
      },
      {
        "id": 13,
        "title": "Migrating Millions of Concurrent Websockets to Envoy",
        "url": "https://slack.engineering/migrating-millions-of-concurrent-websockets-to-envoy/",
        "topics": [
          "Infrastructure",
          "Messaging"
        ],
        "year": "2021"
      },
      {
        "id": 14,
        "title": "Scaling Datastores at Slack with Vitess",
        "url": "https://slack.engineering/scaling-datastores-at-slack-with-vitess/",
        "topics": [
          "Databases"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Snap",
    "blogUrl": "https://eng.snap.com/blog",
    "articles": [
      {
        "id": 1,
        "title": "Bento - Snap's ML Platform",
        "url": "https://eng.snap.com/introducing-bento",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "Snap's Embedding-based Retrieval for its video recommendation system",
        "url": "https://eng.snap.com/embedding-based-retrieval",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "How Snap Speed Up Feature Engineering for Recommendation Systems",
        "url": "https://eng.snap.com/speed-up-feature-engineering",
        "topics": [
          "AI/ML",
          "Data Engineering"
        ],
        "year": "2022"
      },
      {
        "id": 4,
        "title": "How Snap leverages synthetic data to boost the development of ML models",
        "url": "https://eng.snap.com/synthetic-data-for-machine-learning",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 5,
        "title": "Training Large-Scale Recommendation Models with TPUs",
        "url": "https://eng.snap.com/training-models-with-tpus",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 6,
        "title": "Machine Learning for Snapchat Ad Ranking",
        "url": "https://eng.snap.com/machine-learning-snap-ad-ranking",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      }
    ]
  },
  {
    "companyName": "Spotify",
    "blogUrl": "https://engineering.atspotify.com/",
    "articles": [
      {
        "id": 1,
        "title": "How Spotify Generated Millions of Content Annotations",
        "url": "https://engineering.atspotify.com/2024/10/how-we-generated-millions-of-content-annotations/",
        "topics": [
          "AI/ML",
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "Spotify's Data Platform",
        "url": "https://engineering.atspotify.com/2024/05/data-platform-explained-part-ii/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "The What, Why, and How of Mastering App Size",
        "url": "https://engineering.atspotify.com/2023/11/the-what-why-and-how-of-mastering-app-size/",
        "topics": [
          "Mobile",
          "Performance"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "How Spotify Automated Content Marketing to Acquire Users at Scale",
        "url": "https://engineering.atspotify.com/2023/11/how-we-automated-content-marketing-to-acquire-users-at-scale/",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "How We Built Infrastructure to Run User Forecasts at Spotify",
        "url": "https://engineering.atspotify.com/2022/06/how-we-built-infrastructure-to-run-user-forecasts-at-spotify/",
        "topics": [
          "Infrastructure",
          "AI/ML"
        ],
        "year": "2022"
      }
    ]
  },
  {
    "companyName": "Stripe",
    "blogUrl": "https://stripe.com/blog/engineering",
    "articles": [
      {
        "id": 1,
        "title": "Stripe's system for tracking and validating money movement",
        "url": "https://stripe.com/blog/ledger-stripe-system-for-tracking-and-validating-money-movement",
        "topics": [
          "Payments",
          "Architecture"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "How Stripe Processed $1 Trillion in Payments with Zero Downtime",
        "url": "https://stripe.com/blog/how-stripes-document-databases-supported-99.999-uptime-with-zero-downtime-data-migrations",
        "topics": [
          "Databases",
          "Payments"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "How Stripe built its fraud prevention system",
        "url": "https://stripe.com/blog/how-we-built-it-stripe-radar",
        "topics": [
          "Security",
          "Payments"
        ],
        "year": "2023"
      },
      {
        "id": 4,
        "title": "How Stripe builds interactive docs with Markdoc",
        "url": "https://stripe.com/blog/markdoc",
        "topics": [
          "Frontend"
        ],
        "year": "2022"
      },
      {
        "id": 5,
        "title": "Stripe's payments APIs: The first 10 years",
        "url": "https://stripe.com/blog/payment-api-design",
        "topics": [
          "Architecture",
          "Payments"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Swiggy",
    "blogUrl": "https://bytes.swiggy.com/",
    "articles": [
      {
        "id": 1,
        "title": "Swiggy's Text-to-SQL Solution",
        "url": "https://bytes.swiggy.com/hermes-a-text-to-sql-solution-at-swiggy-81573fb4fb6e",
        "topics": [
          "AI/ML",
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "Optimising the picking process for faster Instamart deliveries",
        "url": "https://bytes.swiggy.com/optimizing-the-picking-process-to-enable-faster-deliveries-for-instamart-93de0fe9d819",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 3,
        "title": "Improving search relevance using small language models",
        "url": "https://bytes.swiggy.com/improving-search-relevance-in-hyperlocal-food-delivery-using-small-language-models-ecda2acc24e6",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 4,
        "title": "Predicting Food Delivery Time at Cart",
        "url": "https://bytes.swiggy.com/predicting-food-delivery-time-at-cart-cda23a84ba63",
        "topics": [
          "AI/ML"
        ],
        "year": "2023"
      },
      {
        "id": 5,
        "title": "Contextual Bandits for Ads Recommendations",
        "url": "https://bytes.swiggy.com/contextual-bandits-for-ads-recommendations-ec210775fcf",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 6,
        "title": "Using deep learning to detect dissonance between address text and location",
        "url": "https://bytes.swiggy.com/using-deep-learning-to-detect-dissonance-between-address-text-and-location-4b228bc2c3fb",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 7,
        "title": "Designing Resilient Microservices at Swiggy",
        "url": "https://bytes.swiggy.com/designing-resilient-microservices-part-1-6a72fe964759",
        "topics": [
          "Architecture"
        ],
        "year": "2021"
      },
      {
        "id": 8,
        "title": "Designing the Serviceability Platform at Swiggy for High Scale",
        "url": "https://bytes.swiggy.com/designing-the-serviceability-platform-at-swiggy-for-high-scale-part-2-ab20365fbc23",
        "topics": [
          "Architecture",
          "Performance"
        ],
        "year": "2021"
      },
      {
        "id": 9,
        "title": "A brief introduction to Engineering challenges at Swiggy",
        "url": "https://bytes.swiggy.com/engineering-challenges-at-swiggy-430dea6c86a3",
        "topics": [
          "Architecture"
        ],
        "year": "2021"
      },
      {
        "id": 10,
        "title": "Re-Architecting Swiggy's logistics systems",
        "url": "https://bytes.swiggy.com/re-architecting-swiggys-logistics-systems-ddf301a29fa0",
        "topics": [
          "Architecture"
        ],
        "year": "2021"
      },
      {
        "id": 11,
        "title": "Using Deep Learning for Ranking in Dish Search",
        "url": "https://bytes.swiggy.com/using-deep-learning-for-ranking-in-dish-search-4df2772dddce",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2021"
      },
      {
        "id": 12,
        "title": "Learning to Predict Two-Wheeler Travel Distance",
        "url": "https://bytes.swiggy.com/learning-to-predict-two-wheeler-travel-distance-752d836d741d",
        "topics": [
          "AI/ML"
        ],
        "year": "2021"
      },
      {
        "id": 13,
        "title": "Learning To Rank Restaurants",
        "url": "https://bytes.swiggy.com/learning-to-rank-restaurants-c6a69ba4b330",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2021"
      },
      {
        "id": 14,
        "title": "Running Geo Queries At Scale",
        "url": "https://bytes.swiggy.com/running-geo-queries-at-scale-adea70f5af45",
        "topics": [
          "Databases",
          "Performance"
        ],
        "year": "2020"
      },
      {
        "id": 15,
        "title": "Deploying deep learning models at scale at Swiggy",
        "url": "https://bytes.swiggy.com/deploying-deep-learning-models-at-scale-at-swiggy-tensorflow-serving-on-dsp-ad5da40f7a6c",
        "topics": [
          "AI/ML",
          "Infrastructure"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Tinder",
    "blogUrl": "https://medium.com/tinder",
    "articles": [
      {
        "id": 1,
        "title": "Tinder API Style Guide",
        "url": "https://medium.com/tinder/tinder-api-style-guide-part-1-081804a7ef40",
        "topics": [
          "Architecture"
        ],
        "year": "2024"
      },
      {
        "id": 2,
        "title": "Building Obsidian, Tinder's Design System",
        "url": "https://medium.com/tinder/building-obsidian-tinders-design-system-e127770d8e3f",
        "topics": [
          "Frontend"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "How Tinder built its API Gateway",
        "url": "https://medium.com/tinder/how-we-built-the-tinder-api-gateway-831c6ca5ceca",
        "topics": [
          "Architecture",
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 4,
        "title": "Scaling out Tinder Android Payment Flow using State Machine",
        "url": "https://medium.com/tinder/scaling-out-tinder-android-payment-flow-using-state-machine-e14ef0591b6",
        "topics": [
          "Mobile",
          "Payments"
        ],
        "year": "2020"
      }
    ]
  },
  {
    "companyName": "Twitch",
    "blogUrl": "https://blog.twitch.tv/en/tags/engineering/",
    "articles": [
      {
        "id": 1,
        "title": "Ingesting Live Video Streams at Global Scale",
        "url": "https://blog.twitch.tv/en/2022/04/26/ingesting-live-video-streams-at-global-scale/",
        "topics": [
          "Video/Media",
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 2,
        "title": "Breaking the Monolith at Twitch",
        "url": "https://blog.twitch.tv/en/2022/04/12/breaking-the-monolith-at-twitch-part-2/",
        "topics": [
          "Architecture"
        ],
        "year": "2022"
      },
      {
        "id": 3,
        "title": "Using Machine Learning to Review Emotes",
        "url": "https://blog.twitch.tv/en/2022/06/22/smarter-better-faster-using-machine-learning-to-review-emotes/",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 4,
        "title": "Defense, threat modeling and High Availability at Twitch",
        "url": "https://blog.twitch.tv/en/2021/11/16/defend-your-castle-high-availability-for-high-stakes-cloud-services/",
        "topics": [
          "Security",
          "Infrastructure"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Twitter/X",
    "blogUrl": "https://blog.x.com/engineering/en_us",
    "articles": [
      {
        "id": 1,
        "title": "Twitter's Recommendation Algorithm",
        "url": "https://blog.x.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm",
        "topics": [
          "AI/ML",
          "Search"
        ],
        "year": "2023"
      },
      {
        "id": 2,
        "title": "How we scaled Reads On the Twitter Users Database",
        "url": "https://blog.x.com/engineering/en_us/topics/infrastructure/2023/how-we-scaled-reads-on-the-twitter-users-database",
        "topics": [
          "Databases",
          "Performance"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "Powering real-time data analytics with Druid at Twitter",
        "url": "https://blog.x.com/engineering/en_us/topics/infrastructure/2022/powering-real-time-data-analytics-with-druid-at-twitter",
        "topics": [
          "Data Engineering"
        ],
        "year": "2022"
      },
      {
        "id": 4,
        "title": "How we built Twitter's highly reliable ads pacing service",
        "url": "https://blog.x.com/engineering/en_us/topics/infrastructure/2021/how-we-built-twitter-s-highly-reliable-ads-pacing-service",
        "topics": [
          "Architecture"
        ],
        "year": "2021"
      },
      {
        "id": 5,
        "title": "Storing and retrieving millions of ad impressions per second",
        "url": "https://blog.x.com/engineering/en_us/topics/infrastructure/2021/storing-and-retrieving-millions-of-ad-impressions-per-second",
        "topics": [
          "Databases",
          "Performance"
        ],
        "year": "2021"
      },
      {
        "id": 6,
        "title": "Processing billions of events in real time at Twitter",
        "url": "https://blog.x.com/engineering/en_us/topics/infrastructure/2021/processing-billions-of-events-in-real-time-at-twitter-",
        "topics": [
          "Data Engineering"
        ],
        "year": "2021"
      },
      {
        "id": 7,
        "title": "Logging at Twitter",
        "url": "https://blog.x.com/engineering/en_us/topics/infrastructure/2021/logging-at-twitter-updated",
        "topics": [
          "Observability"
        ],
        "year": "2021"
      },
      {
        "id": 8,
        "title": "Twitter's ads serving platform",
        "url": "https://blog.x.com/engineering/en_us/topics/infrastructure/2021/sharding-simplification-and-twitters-ads-serving-platform",
        "topics": [
          "Architecture"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Uber",
    "blogUrl": "https://eng.uber.com/",
    "articles": [
      {
        "id": 1,
        "title": "Migrating Uber's Compute Platform to Kubernetes",
        "url": "https://www.uber.com/en-IN/blog/migrating-ubers-compute-platform-to-kubernetes-a-technical-journey/?uclick_id=b4e6f2b7-b4a5-446a-beeb-0cc53334b2fe",
        "topics": [
          "Infrastructure"
        ],
        "year": "2025"
      },
      {
        "id": 2,
        "title": "MySQL At Uber",
        "url": "https://www.uber.com/en-IN/blog/mysql-at-uber/",
        "topics": [
          "Databases"
        ],
        "year": "2025"
      },
      {
        "id": 3,
        "title": "How Uber Uses Ray to Optimize the Rides Business",
        "url": "https://www.uber.com/en-IN/blog/how-uber-uses-ray-to-optimize-the-rides-business/",
        "topics": [
          "AI/ML"
        ],
        "year": "2025"
      },
      {
        "id": 4,
        "title": "How Uber Optimizes LLM Training",
        "url": "https://www.uber.com/en-IN/blog/open-source-and-in-house-how-uber-optimizes-llm-training/",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 5,
        "title": "Natural Language to SQL Using Gen AI",
        "url": "https://www.uber.com/en-IN/blog/query-gpt/",
        "topics": [
          "AI/ML"
        ],
        "year": "2024"
      },
      {
        "id": 6,
        "title": "Lucene: Uber's Search Platform",
        "url": "https://www.uber.com/en-IN/blog/lucene-version-upgrade/",
        "topics": [
          "Search"
        ],
        "year": "2024"
      },
      {
        "id": 7,
        "title": "Uber's implementation of Live Activity on iOS",
        "url": "https://www.uber.com/en-IN/blog/live-activity-on-ios/",
        "topics": [
          "Mobile"
        ],
        "year": "2024"
      },
      {
        "id": 8,
        "title": "Odin: Uber's Stateful Platform",
        "url": "https://www.uber.com/en-IN/blog/odin-stateful-platform/",
        "topics": [
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 9,
        "title": "Kafka Tiered Storage at Uber",
        "url": "https://www.uber.com/en-IN/blog/kafka-tiered-storage/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 10,
        "title": "Modernizing Logging at Uber with CLP",
        "url": "https://www.uber.com/en-IN/blog/modernizing-logging-with-clp-ii/",
        "topics": [
          "Observability"
        ],
        "year": "2024"
      },
      {
        "id": 11,
        "title": "How Uber ensures Apache Cassandra's tolerance for single-zone failure",
        "url": "https://www.uber.com/en-IN/blog/single-zone-failure-tolerance/",
        "topics": [
          "Databases",
          "Infrastructure"
        ],
        "year": "2024"
      },
      {
        "id": 12,
        "title": "How LedgerStore Supports Trillions of Indexes at Uber",
        "url": "https://www.uber.com/en-IN/blog/how-ledgerstore-supports-trillions-of-indexes/",
        "topics": [
          "Databases"
        ],
        "year": "2024"
      },
      {
        "id": 13,
        "title": "Balancing HDFS DataNodes in the Uber DataLake",
        "url": "https://www.uber.com/en-IN/blog/balancing-hdfs-datanodes-in-the-uber-datalake/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2024"
      },
      {
        "id": 14,
        "title": "How Uber Serves Over 40 Million Reads Per Second from Online Storage Using an Integrated Cache",
        "url": "https://www.uber.com/en-IN/blog/how-uber-serves-over-40-million-reads-per-second-using-an-integrated-cache/",
        "topics": [
          "Caching",
          "Performance"
        ],
        "year": "2024"
      },
      {
        "id": 15,
        "title": "How Uber Optimized Cassandra Operations At Scale",
        "url": "https://www.uber.com/en-IN/blog/how-uber-optimized-cassandra-operations-at-scale/",
        "topics": [
          "Databases"
        ],
        "year": "2023"
      },
      {
        "id": 16,
        "title": "How Uber Optimizes the Timing of Push Notifications using ML and Linear Programming",
        "url": "https://www.uber.com/en-IN/blog/how-uber-optimizes-push-notifications-using-ml/",
        "topics": [
          "AI/ML",
          "Messaging"
        ],
        "year": "2022"
      },
      {
        "id": 17,
        "title": "Deduping and Storing Images at Uber Eats",
        "url": "https://www.uber.com/en-IN/blog/deduping-and-storing-images-at-uber-eats/",
        "topics": [
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 18,
        "title": "Uber's Next Gen Push Platform on gRPC",
        "url": "https://www.uber.com/en-IN/blog/ubers-next-gen-push-platform-on-grpc/",
        "topics": [
          "Messaging",
          "Infrastructure"
        ],
        "year": "2022"
      },
      {
        "id": 19,
        "title": "Uber's Highly Scalable and Distributed Shuffle as a Service",
        "url": "https://www.uber.com/en-IN/blog/ubers-highly-scalable-and-distributed-shuffle-as-a-service/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2022"
      },
      {
        "id": 20,
        "title": "How Uber Predicts Arrival Times Using Deep Learning",
        "url": "https://www.uber.com/en-IN/blog/deepeta-how-uber-predicts-arrival-times/",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 21,
        "title": "Real-Time Exactly-Once Ad Event Processing with Apache Flink, Kafka, and Pinot",
        "url": "https://www.uber.com/en-IN/blog/real-time-exactly-once-ad-event-processing/",
        "topics": [
          "Data Engineering"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Walmart",
    "blogUrl": "https://medium.com/walmartglobaltech",
    "articles": [
      {
        "id": 1,
        "title": "Walmart's Cassandra CDC Solution",
        "url": "https://medium.com/walmartglobaltech/walmarts-cassandra-cdc-solution-6fc650031a3",
        "topics": [
          "Data Engineering",
          "Databases"
        ],
        "year": "2022"
      },
      {
        "id": 2,
        "title": "Scaling the Walmart Inventory Reservations API for Peak Traffic",
        "url": "https://medium.com/walmartglobaltech/scaling-the-walmart-inventory-reservations-api-for-peak-traffic-9ba37833ef9d",
        "topics": [
          "Performance",
          "Architecture"
        ],
        "year": "2022"
      },
      {
        "id": 3,
        "title": "A Markov Chain Formulation for the Grocery Item Picking Process",
        "url": "https://medium.com/walmartglobaltech/a-markov-chain-formulation-of-grocery-item-picking-process-54c65a3ec5b5",
        "topics": [
          "AI/ML"
        ],
        "year": "2021"
      },
      {
        "id": 4,
        "title": "How we rebuilt the Walmart Autocomplete Backend",
        "url": "https://medium.com/walmartglobaltech/how-we-rebuilt-the-walmart-autocomplete-backend-10efe71d624a",
        "topics": [
          "Search",
          "Performance"
        ],
        "year": "2021"
      },
      {
        "id": 5,
        "title": "Building a Notification Framework for Microservice-based Application",
        "url": "https://medium.com/walmartglobaltech/building-a-notification-framework-for-microservice-based-application-6fe5ac9dfcee",
        "topics": [
          "Messaging",
          "Architecture"
        ],
        "year": "2021"
      }
    ]
  },
  {
    "companyName": "Zomato",
    "blogUrl": "https://blog.zomato.com/category/technology",
    "articles": [
      {
        "id": 1,
        "title": "Building a cost-effective logging platform for petabyte scale",
        "url": "https://blog.zomato.com/building-a-cost-effective-logging-platform-using-clickhouse-for-petabyte-scale",
        "topics": [
          "Observability",
          "Cost Optimization"
        ],
        "year": "2023"
      },
      {
        "id": 2,
        "title": "How Zomato Handles 100 Million Daily Search Queries",
        "url": "https://blog.zomato.com/explained-how-zomato-handles-100-million-daily-search-queries-part-three",
        "topics": [
          "Search",
          "Performance"
        ],
        "year": "2023"
      },
      {
        "id": 3,
        "title": "How Zomato Powers restaurant ads using ML",
        "url": "https://blog.zomato.com/powering-restaurant-ads-on-zomato",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 4,
        "title": "How Zomato uses embeddings to identify and cluster unique addresses",
        "url": "https://blog.zomato.com/unique-addresses",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 5,
        "title": "How Zomato predicts your order's Food preparation time",
        "url": "https://blog.zomato.com/predicting-fpt-optimally",
        "topics": [
          "AI/ML"
        ],
        "year": "2022"
      },
      {
        "id": 6,
        "title": "How Zomato locates its users",
        "url": "https://blog.zomato.com/to-help-us-locate-you-better",
        "topics": [
          "Mobile"
        ],
        "year": "2021"
      },
      {
        "id": 7,
        "title": "The Deep Tech Behind Estimating Food Preparation Time",
        "url": "https://blog.zomato.com/food-preparation-time",
        "topics": [
          "AI/ML"
        ],
        "year": "2020"
      }
    ]
  }
];
