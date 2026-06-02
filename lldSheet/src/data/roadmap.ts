export const ROADMAP = [
  {
    phase:"Phase 1 — Foundations", icon:"🌱", badge:"Beginner", badgeCls:"diff-b",
    sub:"Start here. Build strong fundamentals before jumping to systems.",
    items:[
      { ico:"🌐", name:"How the Internet Works",
        desc:"IP, DNS, TCP/IP, HTTP/HTTPS basics. What happens when you type a URL.",
        links:[
          {t:"📹 How the Internet Works (Fireship)",u:"https://youtu.be/zN8YNNHcaZc",lt:"video"},
          {t:"📖 How DNS Works",u:"https://howdns.works",lt:"blog"},
          {t:"📖 MDN: HTTP Overview",u:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",lt:"blog"},
        ]},
      { ico:"🔌", name:"TCP vs UDP",
        desc:"Reliable vs fast delivery. When to use which. Three-way handshake.",
        links:[
          {t:"📹 TCP vs UDP (Hussain Nasser)",u:"https://youtu.be/qqRYkcazoms",lt:"video"},
          {t:"📖 TCP vs UDP Explained",u:"https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp",lt:"blog"},
        ]},
      { ico:"🗄️", name:"SQL vs NoSQL",
        desc:"Relational vs document/key-value/graph. ACID vs BASE. When to choose what.",
        links:[
          {t:"📹 SQL vs NoSQL (Fireship)",u:"https://youtu.be/t8U3MqVljqA",lt:"video"},
          {t:"📖 SQL vs NoSQL — Martin Fowler",u:"https://martinfowler.com/books/nosql.html",lt:"blog"},
          {t:"📹 Databases (Neetcode)",u:"https://youtu.be/W2Z7fbCLSTw",lt:"video"},
        ]},
      { ico:"📇", name:"Database Indexing",
        desc:"B-tree indexes, covering indexes, when indexes hurt. Query optimisation.",
        links:[
          {t:"📹 DB Indexing Explained",u:"https://youtu.be/-qNSXK7s7_w",lt:"video"},
          {t:"📖 Use The Index, Luke",u:"https://use-the-index-luke.com",lt:"blog"},
        ]},
      { ico:"⚡", name:"Caching Fundamentals",
        desc:"Why cache? Cache-aside, write-through, write-back. LRU, LFU. Redis basics.",
        links:[
          {t:"📹 Caching (ByteByteGo)",u:"https://youtu.be/dGAgxozNWFE",lt:"video"},
          {t:"📖 Caching Strategies",u:"https://www.geeksforgeeks.org/caching-system-design-concept-for-beginners/",lt:"blog"},
        ]},
      { ico:"🏗️", name:"OOP Principles (4 Pillars)",
        desc:"Encapsulation, Abstraction, Inheritance, Polymorphism with real examples.",
        links:[
          {t:"📹 OOP Explained (Fireship)",u:"https://youtu.be/pTB0EiLXUC8",lt:"video"},
          {t:"📖 OOP in Java — Baeldung",u:"https://www.baeldung.com/java-oop",lt:"blog"},
        ]},
      { ico:"🔩", name:"SOLID Principles",
        desc:"SRP, OCP, LSP, ISP, DIP. The backbone of every LLD interview answer.",
        links:[
          {t:"📹 SOLID Principles (ArjanCodes)",u:"https://youtu.be/pTB0EiLXUC8",lt:"video"},
          {t:"📖 SOLID Explained — DigitalOcean",u:"https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",lt:"blog"},
          {t:"📖 SOLID — Baeldung",u:"https://www.baeldung.com/solid-principles",lt:"blog"},
        ]},
    ]
  },
  {
    phase:"Phase 2 — Core HLD Building Blocks", icon:"🧱", badge:"Beginner–Intermediate", badgeCls:"diff-i",
    sub:"The 10 concepts that appear in almost every system design interview.",
    items:[
      { ico:"⚖️", name:"Load Balancing",
        desc:"Round-robin, least-connections, IP hash. L4 vs L7. Sticky sessions.",
        links:[
          {t:"📹 Load Balancing (ByteByteGo)",u:"https://youtu.be/K0Ta65OqQkY",lt:"video"},
          {t:"📖 Load Balancing — NGINX",u:"https://www.nginx.com/resources/glossary/load-balancing",lt:"blog"},
        ]},
      { ico:"🔀", name:"Horizontal vs Vertical Scaling",
        desc:"Scale up vs scale out. Stateless services. Database scaling patterns.",
        links:[
          {t:"📹 Scaling (ByteByteGo)",u:"https://youtu.be/xpDnVSmNFX0",lt:"video"},
          {t:"📖 Scaling Patterns",u:"https://www.geeksforgeeks.org/system-design-horizontal-and-vertical-scaling/",lt:"blog"},
        ]},
      { ico:"🌐", name:"CDN & Edge Caching",
        desc:"Push vs pull CDN. Cache-Control headers. Serving static assets globally.",
        links:[
          {t:"📹 CDN (Fireship)",u:"https://youtu.be/RI9np1LWzqw",lt:"video"},
          {t:"📖 How CDN Works — Cloudflare",u:"https://www.cloudflare.com/learning/cdn/what-is-a-cdn",lt:"blog"},
        ]},
      { ico:"📨", name:"Message Queues",
        desc:"Async decoupling. Queue vs Topic. At-least-once delivery. Kafka vs RabbitMQ.",
        links:[
          {t:"📹 Message Queues (IBM)",u:"https://youtu.be/oUJbuFMyBDk",lt:"video"},
          {t:"📹 Kafka in 100 Seconds",u:"https://youtu.be/uvb00oaa3k8",lt:"video"},
          {t:"📖 Kafka Docs",u:"https://kafka.apache.org/documentation",lt:"blog"},
        ]},
      { ico:"🔄", name:"Consistent Hashing",
        desc:"Hash ring, virtual nodes, minimal data movement. Used in DynamoDB, Cassandra.",
        links:[
          {t:"📹 Consistent Hashing (ByteByteGo)",u:"https://youtu.be/UF9Iqmg94tk",lt:"video"},
          {t:"📖 Consistent Hashing — Tom White",u:"https://tom-e-white.com/2007/11/consistent-hashing.html",lt:"blog"},
        ]},
      { ico:"📐", name:"CAP Theorem",
        desc:"Consistency, Availability, Partition Tolerance. Why you can only pick 2.",
        links:[
          {t:"📹 CAP Theorem (ByteByteGo)",u:"https://youtu.be/BHqjEjzAicA",lt:"video"},
          {t:"📖 CAP FAQ — Henry Robinson",u:"https://www.cl.cam.ac.uk/research/dtg/archived/files/publications/public/mk428/cap-critique.pdf",lt:"blog"},
        ]},
      { ico:"🗃️", name:"Database Sharding",
        desc:"Range vs hash sharding. Hot spots. Resharding. Cross-shard queries.",
        links:[
          {t:"📹 Database Sharding (ByteByteGo)",u:"https://youtu.be/5faMjKuB9bc",lt:"video"},
          {t:"📖 DB Sharding — Shopify",u:"https://shopify.engineering/this-is-your-brain-on-database",lt:"blog"},
        ]},
      { ico:"🔁", name:"Database Replication",
        desc:"Primary-replica, multi-primary. Sync vs async. Read replicas for scaling reads.",
        links:[
          {t:"📹 Replication (ByteByteGo)",u:"https://youtu.be/RIcNswROzCc",lt:"video"},
          {t:"📖 Replication — PostgreSQL Docs",u:"https://www.postgresql.org/docs/current/high-availability.html",lt:"blog"},
        ]},
      { ico:"🚦", name:"Rate Limiting",
        desc:"Token bucket, sliding window, fixed window. Per-user vs global. 429 responses.",
        links:[
          {t:"📹 Rate Limiting (ByteByteGo)",u:"https://youtu.be/FU4WlwfS3G0",lt:"video"},
          {t:"📖 Rate Limiting Algorithms",u:"https://www.geeksforgeeks.org/rate-limiting-in-system-design/",lt:"blog"},
        ]},
      { ico:"🆔", name:"Unique ID Generation",
        desc:"UUID, Snowflake ID, auto-increment pitfalls. Twitter Snowflake deep dive.",
        links:[
          {t:"📹 Unique ID Generation (ByteByteGo)",u:"https://youtu.be/lfhGHm2DcME",lt:"video"},
          {t:"📖 Twitter Snowflake",u:"https://blog.twitter.com/engineering/en_us/a/2010/announcing-snowflake",lt:"blog"},
        ]},
    ]
  },
  {
    phase:"Phase 3 — LLD & Design Patterns", icon:"🧩", badge:"Intermediate", badgeCls:"diff-i",
    sub:"Object-Oriented design, all 23 GoF patterns, SOLID in practice.",
    items:[
      { ico:"🏭", name:"Creational Patterns (6)",
        desc:"Singleton, Factory Method, Abstract Factory, Builder, Prototype, Object Pool.",
        links:[
          {t:"📹 All Creational Patterns (Derek Banas)",u:"https://youtu.be/vNHpsC5ng_E",lt:"video"},
          {t:"📖 Refactoring.Guru — Creational",u:"https://refactoring.guru/design-patterns/creational-patterns",lt:"blog"},
          {t:"📹 Christopher Okhravi Playlist",u:"https://youtube.com/playlist?list=PLrhzvIcii6GNjpARjnq4yD3HHUnTSN5pC",lt:"video"},
        ]},
      { ico:"🌉", name:"Structural Patterns (7)",
        desc:"Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.",
        links:[
          {t:"📹 Structural Patterns (Derek Banas)",u:"https://youtu.be/lPsSL6_7NBg",lt:"video"},
          {t:"📖 Refactoring.Guru — Structural",u:"https://refactoring.guru/design-patterns/structural-patterns",lt:"blog"},
        ]},
      { ico:"🔄", name:"Behavioural Patterns (11)",
        desc:"Chain, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template, Visitor, Interpreter.",
        links:[
          {t:"📹 Behavioural Patterns (Derek Banas)",u:"https://youtu.be/d9wyhy3yP1E",lt:"video"},
          {t:"📖 Refactoring.Guru — Behavioural",u:"https://refactoring.guru/design-patterns/behavioral-patterns",lt:"blog"},
        ]},
      { ico:"📋", name:"UML Class Diagrams",
        desc:"Association, aggregation, composition, inheritance. Draw before you code.",
        links:[
          {t:"📹 UML Class Diagrams (Lucidchart)",u:"https://youtu.be/UI6lqHOVHic",lt:"video"},
          {t:"📖 UML Guide — Visual Paradigm",u:"https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial",lt:"blog"},
        ]},
      { ico:"🧵", name:"Concurrency & Thread Safety",
        desc:"Race conditions, deadlocks, mutex, semaphore, lock-free structures.",
        links:[
          {t:"📹 Java Concurrency (Amigoscode)",u:"https://youtu.be/d9s_d28yJq0",lt:"video"},
          {t:"📖 Java Concurrency in Practice (Book)",u:"https://jcip.net",lt:"blog"},
        ]},
    ]
  },
  {
    phase:"Phase 4 — Intermediate System Design", icon:"⚙️", badge:"Intermediate", badgeCls:"diff-i",
    sub:"Design real products end to end. Learn the tradeoffs.",
    items:[
      { ico:"🔗", name:"URL Shortener",
        desc:"Base62, hash collisions, redirect at scale, analytics. Your first HLD problem.",
        links:[
          {t:"📹 URL Shortener (Neetcode)",u:"https://youtu.be/JQDHz72LtRQ",lt:"video"},
          {t:"📖 Grokking — TinyURL",u:"https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR",lt:"course"},
        ]},
      { ico:"💬", name:"Chat System (WhatsApp)",
        desc:"WebSockets, offline message delivery, message ordering, Cassandra storage.",
        links:[
          {t:"📹 Chat System (ByteByteGo)",u:"https://youtu.be/vvhC64hQZMk",lt:"video"},
          {t:"📖 Designing WhatsApp",u:"https://www.geeksforgeeks.org/design-a-chat-system-like-whatsapp/",lt:"blog"},
        ]},
      { ico:"📸", name:"Instagram / Photo Feed",
        desc:"Object storage, CDN, feed generation (push vs pull), follow graph.",
        links:[
          {t:"📹 Instagram (ByteByteGo)",u:"https://youtu.be/hnpzNAPiC0E",lt:"video"},
          {t:"📖 Grokking — Instagram",u:"https://www.educative.io/courses/grokking-the-system-design-interview/m22LWKgXOEm",lt:"course"},
        ]},
      { ico:"🐦", name:"Twitter Timeline (Fanout)",
        desc:"Fanout-on-write vs read. Celebrity problem. Redis timeline cache.",
        links:[
          {t:"📹 Twitter Design (Gaurav Sen)",u:"https://youtu.be/wYk0xPP_P_8",lt:"video"},
          {t:"📖 Twitter Real Architecture",u:"https://blog.twitter.com/engineering/en_us/topics/infrastructure",lt:"blog"},
        ]},
      { ico:"🔔", name:"Notification System",
        desc:"APNs, FCM, fanout queue, priority, retries, user preferences.",
        links:[
          {t:"📹 Notification System (ByteByteGo)",u:"https://youtu.be/bBTPZ9NdSk8",lt:"video"},
          {t:"📖 Notification Design Guide",u:"https://www.geeksforgeeks.org/notification-system-design/",lt:"blog"},
        ]},
      { ico:"🅿️", name:"Parking Lot (LLD)",
        desc:"Singleton, Strategy (pricing), multiple vehicle types, tickets, floors.",
        links:[
          {t:"📹 Parking Lot LLD (Udit Agarwal)",u:"https://youtu.be/DSGsa0pu8-k",lt:"video"},
          {t:"📖 Parking Lot LLD Guide",u:"https://www.geeksforgeeks.org/design-parking-lot-using-ood/",lt:"blog"},
        ]},
      { ico:"💾", name:"LRU Cache (LLD)",
        desc:"HashMap + Doubly linked list. O(1) get/put. Thread-safe variant.",
        links:[
          {t:"📹 LRU Cache (Nick White)",u:"https://youtu.be/S6IfqDXWa10",lt:"video"},
          {t:"📖 LRU Cache Implementation",u:"https://www.geeksforgeeks.org/lru-cache-implementation/",lt:"blog"},
        ]},
    ]
  },
  {
    phase:"Phase 5 — Advanced System Design", icon:"🚀", badge:"Advanced", badgeCls:"diff-a",
    sub:"Distributed systems at scale. The problems that separate senior engineers.",
    items:[
      { ico:"▶️", name:"Video Streaming (YouTube/Netflix)",
        desc:"HLS/DASH, adaptive bitrate, transcoding pipeline, CDN strategy.",
        links:[
          {t:"📹 Netflix Architecture (InfoQ)",u:"https://youtu.be/psQzyFfsUGU",lt:"video"},
          {t:"📖 Netflix Tech Blog",u:"https://netflixtechblog.com",lt:"blog"},
          {t:"📖 Grokking — YouTube",u:"https://www.educative.io/courses/grokking-the-system-design-interview/xV26VjZ7yMl",lt:"course"},
        ]},
      { ico:"🚗", name:"Uber / Ride Sharing",
        desc:"Geohash, driver matching, real-time location, surge pricing, ETA.",
        links:[
          {t:"📹 Uber Design (Gaurav Sen)",u:"https://youtu.be/umWABit-wbk",lt:"video"},
          {t:"📖 Uber Engineering Blog",u:"https://eng.uber.com",lt:"blog"},
        ]},
      { ico:"📄", name:"Google Docs (Real-time Collab)",
        desc:"Operational Transformation, CRDT, vector clocks, WebSocket broadcast.",
        links:[
          {t:"📹 Google Docs Architecture",u:"https://youtu.be/2auwirNBvGg",lt:"video"},
          {t:"📖 OT & CRDT Explained",u:"https://www.geeksforgeeks.org/real-time-collaboration-tool-system-design/",lt:"blog"},
        ]},
      { ico:"💳", name:"Payment System",
        desc:"Idempotency keys, double-spend prevention, saga pattern, distributed ledger.",
        links:[
          {t:"📹 Payment System Design",u:"https://youtu.be/olfaBgJrUBI",lt:"video"},
          {t:"📖 Stripe Engineering Blog",u:"https://stripe.com/blog/engineering",lt:"blog"},
        ]},
      { ico:"🔍", name:"Search Engine (Google Search)",
        desc:"Web crawler, inverted index, TF-IDF, PageRank, serving layer.",
        links:[
          {t:"📹 Search Engine Design (Gaurav Sen)",u:"https://youtu.be/0LTXCcVRQi0",lt:"video"},
          {t:"📖 Google Research Papers",u:"https://research.google/pubs",lt:"blog"},
        ]},
      { ico:"📨", name:"Distributed Message Queue (Kafka)",
        desc:"Partitions, consumer groups, log compaction, exactly-once semantics.",
        links:[
          {t:"📹 Kafka Architecture Deep Dive",u:"https://youtu.be/Ch5VhJzaoaI",lt:"video"},
          {t:"📖 Kafka Definitive Guide (Free)",u:"https://www.confluent.io/resources/kafka-the-definitive-guide",lt:"blog"},
        ]},
      { ico:"💰", name:"Distributed Transactions",
        desc:"2-Phase Commit, Saga pattern, compensating transactions, CQRS + Event Sourcing.",
        links:[
          {t:"📹 Distributed Transactions (Hussain Nasser)",u:"https://youtu.be/S4FnmSeRpAY",lt:"video"},
          {t:"📖 Saga Pattern — microservices.io",u:"https://microservices.io/patterns/data/saga.html",lt:"blog"},
        ]},
    ]
  },
  {
    phase:"Phase 6 — Distributed Systems Deep Dive", icon:"🌍", badge:"Advanced", badgeCls:"diff-a",
    sub:"Internals of databases, consensus, and large-scale infrastructure.",
    items:[
      { ico:"📖", name:"Designing Data-Intensive Applications",
        desc:"The bible of distributed systems. Replication, partitioning, transactions, consensus.",
        links:[
          {t:"📹 DDIA Book Summary",u:"https://youtu.be/PdtlXdse7pw",lt:"video"},
          {t:"📖 DDIA — Martin Kleppmann",u:"https://dataintensive.net",lt:"blog"},
          {t:"📖 DDIA Notes (GitHub)",u:"https://github.com/donnemartin/system-design-primer",lt:"github"},
        ]},
      { ico:"🗳️", name:"Consensus: Raft & Paxos",
        desc:"Leader election, log replication, split-brain prevention.",
        links:[
          {t:"📹 Raft Consensus (MIT 6.824)",u:"https://youtu.be/64Zp3tzNbpE",lt:"video"},
          {t:"📖 The Raft Paper",u:"https://raft.github.io/raft.pdf",lt:"blog"},
          {t:"🎮 Raft Visualization",u:"https://raft.github.io",lt:"blog"},
        ]},
      { ico:"🕰️", name:"Clocks & Ordering (Vector Clocks)",
        desc:"Logical clocks, Lamport timestamps, vector clocks, causality.",
        links:[
          {t:"📹 Distributed Clocks (Martin Kleppmann)",u:"https://youtu.be/FQ_2N3AoinU",lt:"video"},
          {t:"📖 Lamport Clock Paper",u:"https://lamport.azurewebsites.net/pubs/time-clocks.pdf",lt:"blog"},
        ]},
      { ico:"🏛️", name:"Storage Engines (LSM vs B-Tree)",
        desc:"How RocksDB, Cassandra (LSM) vs MySQL, Postgres (B-Tree) work internally.",
        links:[
          {t:"📹 LSM Tree (Hussein Nasser)",u:"https://youtu.be/I6jB0nM9SKU",lt:"video"},
          {t:"📖 DDIA Chapter 3",u:"https://dataintensive.net",lt:"blog"},
        ]},
    ]
  },
];
