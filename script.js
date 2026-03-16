const quizData = [
    // ---------------- Module 2 ----------------
    {
        question: "The systems development lifecycle (SDLC) has six phases. The first three phases are plan, define, and design. What are the last three phases of the SDLC? [cite: 3, 4]",
        options: [
            "Test, deploy, and maintain [cite: 11]",
            "Code, build, and maintain [cite: 12]",
            "Code, build, and test [cite: 19]",
            "Develop, deploy, and maintain [cite: 21]"
        ],
        correct: [3]
    },
    {
        question: "Which task is performed during the develop stage of the systems development lifecycle (SDLC)? [cite: 36]",
        options: [
            "The system is put into use. [cite: 39]",
            "New components are obtained and installed. [cite: 42]",
            "New system requirements are defined. [cite: 45]",
            "Deficiencies are identified. [cite: 46]"
        ],
        correct: [1]
    },
    {
        question: "A systems administrator must grant a new developer permissions that are associated with the developer role. This role is associated with the developer group. Which AWS service should the administrator use to assign the new developer to the developer group? [cite: 51, 52]",
        options: [
            "Amazon Simple Storage Service (Amazon S3) [cite: 56]",
            "Amazon Elastic Compute Cloud (Amazon EC2) [cite: 61]",
            "AWS Resource Access Manager (AWS RAM) [cite: 62]",
            "AWS Identity and Access Management (IAM) [cite: 63]"
        ],
        correct: [3]
    },
    {
        question: "What is an important benefit of AWS CloudShell? [cite: 64]",
        options: [
            "Users get 500 MB of storage per region. [cite: 66]",
            "You manually patch and update the environment [cite: 67]",
            "It inherits your credentials from the AWS Management Console. [cite: 68]",
            "You pay up front for reserved blocks of time and capacity. [cite: 69]"
        ],
        correct: [2]
    },
    {
        question: "What are three ways to interact with AWS service application programming interfaces (APIs)? (Select the THREE best options.) [cite: 73, 74]",
        options: [
            "AWS Management Console [cite: 75]",
            "Programmatically [cite: 76]",
            "AWS software development kits (SDKs) [cite: 78]",
            "AWS Command Line Interface (AWS CLI) [cite: 81]",
            "AWS X-Ray [cite: 82]",
            "AWS CloudTrail [cite: 83]"
        ],
        correct: [0, 2, 3]
    },
    {
        question: "Which tool enables users to control their AWS services from the command line and automate service management with scripts? [cite: 93, 94]",
        options: [
            "Eclipse IDE (Eclipse Foundation) [cite: 95]",
            "AWS Tools for PowerShell [cite: 100]",
            "Microsoft Visual Studio Code [cite: 101]",
            "AWS Identity and Access Management (IAM) [cite: 103]"
        ],
        correct: [1]
    },
    {
        question: "What is Amazon Q Developer? [cite: 106]",
        options: [
            "A cloud-based integrated development environment (IDE) [cite: 109]",
            "A browser-based CLI [cite: 110]",
            "A wizard that leads you through the steps to configure your integrated development environment (IDE) [cite: 111]",
            "A generative Al-powered coding assistant [cite: 112]"
        ],
        correct: [3]
    },
    {
        question: "Which statements describe AWS resource application programming interfaces (APIs)? (Select TWO.) [cite: 114]",
        options: [
            "They provide a lower-level abstraction than the higher-level calls made by service client APIs. [cite: 116, 117]",
            "They have objects for request and result data. [cite: 118]",
            "They have at least one class per conceptual resource. [cite: 119]",
            "They provide a higher-level abstraction than the low-level calls made by service client APIs [cite: 121]",
            "They provide access to resources through objects and collections. [cite: 122]"
        ],
        correct: [3, 4],
        explanation: "Resource APIs provide a higher-level abstraction than the low-level calls made by service client APIs. They consist of classes that represent the conceptual resources you interact with. [cite: 130, 131]"
    },
    {
        question: "A developer is using the AWS software development kit (SDK) for Python (Boto3) and must specify the Region. Which method enables the developer specify the Region? [cite: 133, 134]",
        options: [
            "By setting the AWS PROFILE environment variable [cite: 136]",
            "By setting the Region when they instantiate the service client [cite: 137]",
            "By associating a default Region with their profile in the credentials file in the .aws folder within their 'home' folder [cite: 138]",
            "Users cannot specify the AWS Region in the service client [cite: 139]"
        ],
        correct: [1],
        explanation: "Users can set the Region when they instantiate the service client, by setting the AWS_DEFAULT_REGION environment variable, or by setting the default Region in the AWS shared configuration file. [cite: 141]"
    },
    {
        question: "A developer makes an application programming interface (API) call to access an Amazon Simple Storage Service (Amazon S3) bucket that doesn't exist. Which HTTP response code does the developer receive from the AWS service? [cite: 143, 144]",
        options: [
            "400 series [cite: 147]",
            "200 series [cite: 148]",
            "500 series [cite: 149]",
            "300 series [cite: 150]"
        ],
        correct: [0],
        explanation: "A 400-series response code means that the application has an error that the developer must address. [cite: 146]"
    },

    // ---------------- Module 3 ----------------
    {
        question: "A student is learning about Amazon Simple Storage Service (Amazon S3). During an interview, a potential employer asks the student to explain how Amazon S3 can be used as a storage solution. Which option is a use case for Amazon S3? [cite: 154, 155, 156]",
        options: [
            "Data lake [cite: 157]",
            "Hosting active databases [cite: 160]",
            "Shared file systems [cite: 161]",
            "Block-level storage [cite: 162]"
        ],
        correct: [0]
    },
    {
        question: "A _______ organizes the Amazon Simple Storage Service (Amazon S3) namespace at the highest level. [cite: 172]",
        options: [
            "Bucket [cite: 174]",
            "Container [cite: 175]",
            "Region [cite: 176]",
            "Group [cite: 177]"
        ],
        correct: [0]
    },
    {
        question: "A developer wants to store image files in a bucket that is called images-bucket, but receives the error BucketAlready Exists. Which action must the developer take to resolve this error? [cite: 187, 188]",
        options: [
            "Bucket names are globally unique. If the requested bucket name is not available, the developer must rename the bucket [cite: 189]",
            "The developer must contact AWS Support to request approval to use the same bucket name. [cite: 190]",
            "Bucket names are unique to the Region that they are created in. If the requested bucket name is not available, the developer must create the imoges-bucket in a different Region. [cite: 191]",
            "Bucket names go to the highest bidder. The developer must outbid the current bucket owner. [cite: 192]"
        ],
        correct: [0]
    },
    {
        question: "A developer is using Amazon Simple Storage Service (Amazon S3) to host a static website in a bucket that is called frank-martha-cafe. This bucket is in the us-east-1 Region. Which URL is the virtual-hosted-style URL for the website? [cite: 196, 197]",
        options: [
            "https://s3-website-us-east-1.amazonaws.com/frank-martha-cafe [cite: 198]",
            "https://www.frank-martha-cafe.s3-website-us-east-1.amazonaws.com [cite: 200]",
            "https://frank-martha-cafe.s3-website-us-east-1.amazonaws.com [cite: 201]",
            "https://frank-martha-cafe.s3-us-east-1.amazonaws.com [cite: 202]"
        ],
        correct: [2]
    },
    {
        question: "After versioning is enabled on an Amazon Simple Storage Service (Amazon S3) bucket, it can be disabled. [cite: 203, 204]",
        options: [
            "True [cite: 207]",
            "False [cite: 208]"
        ],
        correct: [1],
        explanation: "By default, versioning is disabled in S3 buckets. After you enable versioning, you can only suspend it (you cannot disable it). [cite: 210]"
    },
    {
        question: "What is the largest size of an object that a user can upload to Amazon Simple Storage Service (Amazon S3) in a single PUT operation? [cite: 212]",
        options: [
            "5 GB [cite: 215]",
            "1 GB [cite: 218]",
            "100 MB [cite: 221]",
            "5 TB [cite: 226]"
        ],
        correct: [0]
    },
    {
        question: "A developer uses an Amazon Simple Storage Service (Amazon S3) bucket. They want to allow a certain AWS Identity and Access Management (IAM) user to perform any S3 operations on the bucket and its objects. They also want to follow AWS recommendations for granting permissions. Which mechanism should the developer apply to the bucket? [cite: 235, 236, 237, 238]",
        options: [
            "An IAM policy [cite: 239]",
            "Bucket policy [cite: 240]",
            "Bucket access control list (ACL) [cite: 246]",
            "Cross-Origin resource Sharing (CORS) [cite: 252]"
        ],
        correct: [1]
    },
    {
        question: "A developer wants to allow a user to download private objects directly from an Amazon Simple Storage Service (Amazon S3) bucket without needing AWS security credentials or permissions. What can the developer share with the user to grant them time-limited access to the objects? [cite: 258, 260, 261]",
        options: [
            "The bucket endpoint URL [cite: 263]",
            "Their AWS account root user credentials [cite: 265]",
            "A temporary token [cite: 267]",
            "A presigned URL [cite: 269]"
        ],
        correct: [3]
    },
    {
        question: "Which method can be used to encrypt Amazon Simple Storage Service (Amazon S3) objects in transit? [cite: 271]",
        options: [
            "Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3) [cite: 272]",
            "Secure Sockets Layer/Transport Layer Security (SSL/TLS) [cite: 274]",
            "Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS) [cite: 276]",
            "Server-Side Encryption with Customer-Provided Keys (SSE-C) [cite: 277]"
        ],
        correct: [1]
    },
    {
        question: "A developer hosts a static website in an Amazon Simple Storage Service (Amazon S3) bucket. The website references image objects in another S3 bucket. However, these images do not display on the website. What could be the problem? [cite: 289, 290, 291]",
        options: [
            "The security group of the S3 bucket does not include an inbound rule to allow HTTP traffic on port 80. [cite: 296, 299]",
            "Cross-Region Replication (CRR) has not been enabled on the bucket where the assets are stored. [cite: 305, 309]",
            "Cross-Origin Resource Sharing (CORS) has not been enabled on the bucket where the assets are stored. [cite: 310, 311]",
            "Amazon S3 does not support object sharing between buckets [cite: 319]"
        ],
        correct: [2]
    },

    // ---------------- Module 4 ----------------
    {
        question: "Which option is the Amazon Web Services (AWS) customer responsible for under the AWS shared responsibility model? (Select TWO.) [cite: 324]",
        options: [
            "Security group configuration [cite: 326]",
            "Physical servers [cite: 327]",
            "Client-side data [cite: 328]",
            "Edge location infrastructure [cite: 329]",
            "Availability Zone security [cite: 330]"
        ],
        correct: [0, 2]
    },
    {
        question: "Which AWS Identity and Access Management (IAM) resource explicitly grants or denies permissions to a user or group of users? [cite: 355, 357]",
        options: [
            "IAM roles [cite: 358]",
            "IAM users [cite: 360]",
            "IAM groups [cite: 362]",
            "IAM policies [cite: 364]"
        ],
        correct: [3]
    },
    {
        question: "What is the correct term for the process of verifying a user's identity as a developer? [cite: 382]",
        options: [
            "Endorsement [cite: 384]",
            "Authentication [cite: 386]",
            "Confirmation [cite: 387]",
            "Authorization [cite: 389]"
        ],
        correct: [1]
    },
    {
        question: "Which statements about IAM user authentication are true? (Select TWO.) [cite: 391]",
        options: [
            "AWS credentials to authenticate with any supported services must be provided. [cite: 396, 397]",
            "A user name and password to authenticate to the console must be provided. [cite: 398]",
            "A pem or .ppk file is used to authenticate programmatically to the AWS application programming interface (API). [cite: 399]",
            "It is a best practice to use the account root user credentials to authenticate programmatically by using the AWS Command Line Interface (AWS CLI). [cite: 400]",
            "Each AWS account can have only one administrator who manages other IAM users. [cite: 401]"
        ],
        correct: [0, 1]
    },
    {
        question: "Which suggestion is an Amazon Web Services (AWS) recommendation for securing AWS credentials for applications that run on Amazon Elastic Compute Cloud (Amazon EC2) instances? [cite: 410]",
        options: [
            "Embed AWS credentials in the software development kit (SDK) client code. [cite: 411]",
            "Store credentials in local AWS configuration files. [cite: 411]",
            "Create an AWS Identity and Access Management (IAM) role and attach it to the EC2 instance. [cite: 413, 414]",
            "Create an AWS Identity and Access Management (IAM) user and attach it to the EC2 instance. [cite: 415]"
        ],
        correct: [2]
    },
    {
        question: "What is the format of AWS Identity and Access Management (IAM) policies that define the allowable API calls an entity can invoke? [cite: 417]",
        options: [
            "YAML Ain't Markup Language (YAML) [cite: 418]",
            "Security Assertion Markup Language (SAML) [cite: 419]",
            "Comma-separated values (CSV) [cite: 420]",
            "JavaScript Object Notation (JSON) [cite: 424]"
        ],
        correct: [3]
    },
    {
        question: "An administrator created an AWS Identity and Access Management (IAM) group called managers within an AWS account. A policy is attached to the managers group. It allows managers to read from and write to an Amazon Simple Storage Service (Amazon S3) bucket in the same AWS account. What is this type of policy? [cite: 425, 426, 427]",
        options: [
            "Identity-based [cite: 431]",
            "Resource-based [cite: 432]",
            "Cross-account access [cite: 434]",
            "AdministratorAccess managed [cite: 436]"
        ],
        correct: [0]
    },
    {
        question: "Which statement reflects best practices when granting permissions to users, groups, roles, and resources? [cite: 438]",
        options: [
            "Create policies that allow broad access and then limit permissions as needed, based on usage. [cite: 442, 443]",
            "Use the account root user for routine tasks that the administrator performs. [cite: 444]",
            "Create policies that follow the principle of least privilege. [cite: 445]",
            "Do not set policies for individual resources. [cite: 446]"
        ],
        correct: [2]
    },
    {
        question: "What is the effect of the policy statement with Effect: Deny and NotResource specifying specific DynamoDB and S3 ARNs? [cite: 447, 449, 452]",
        options: [
            "Denies actions on DynamoDB or Amazon S3 resources except for the resources that are listed in the NotResource element [cite: 454, 455, 457]",
            "Denies the ability to write to the pollynotes DynamoDB table [cite: 458, 459]",
            "Denies the ability to read from the polly-notes-web S3 bucket [cite: 464, 466]",
            "Denies actions on the DynamoDB table or S3 buckets that are listed in the NotResources element [cite: 469, 470, 471]"
        ],
        correct: [0]
    },
    {
        question: "Which statements are true about evaluation logic for AWS Identity and Access Management (IAM) policies? (Select TWO.) [cite: 485]",
        options: [
            "You cannot have deny and allow statements in the same policy. [cite: 486]",
            "An explicit allow overrides an explicit deny. [cite: 487]",
            "An explicit deny overrides an explicit allow. [cite: 489]",
            "By default, all requests are denied. [cite: 490]",
            "By default, all requests are allowed. [cite: 491]"
        ],
        correct: [2, 3]
    },

    // ---------------- Module 5 ----------------
    {
        question: "Which statement best describes Amazon DynamoDB? [cite: 493]",
        options: [
            "An in-memory data store that can boost the performance of databases [cite: 495]",
            "A graph database engine that is optimized for storing billions of relationships [cite: 497, 498]",
            "A relational database that is built for the cloud and is compatible with MySQL and PostgreSQL [cite: 499]",
            "A key-value and document database that scales horizontally and works well for internet-scale applications [cite: 500, 501]"
        ],
        correct: [3]
    },
    {
        question: "Which component is part of an Amazon DynamoDB table? [cite: 505]",
        options: [
            "Predefined schema [cite: 506]",
            "SQL-based queries [cite: 507]",
            "Attributes [cite: 511]",
            "Columns [cite: 511]"
        ],
        correct: [2]
    },
    {
        question: "An Amazon DynamoDB table called SensorReadings captures sensor readings. These readings include a sensor ID attribute that acts as the partition key, and a timestamp attribute that is the sort key. Which statement is true? [cite: 513, 514, 515]",
        options: [
            "The sensor ID together with the timestamp represent a simple primary key. [cite: 516]",
            "It is impossible for two items in the SensorReadings table to have the same partition key. [cite: 517]",
            "It is impossible for two items in the SensorReadings table to have the same sort key. [cite: 518]",
            "It is impossible for two items in the Sensor Readings table to have the same primary key. [cite: 519]"
        ],
        correct: [3]
    },
    {
        question: "Which statement about Amazon DynamoDB partitions is true? [cite: 522]",
        options: [
            "DynamoDB stores data in partitions and chooses the partition based on the range attribute. [cite: 523]",
            "If a table has a simple primary key (partition key only), DynamoDB stores and retrieves each item based on its hash attribute. [cite: 524]",
            "If a table has a composite primary key, DynamoDB will sort the items based on the sort key before selecting the partition for the item. [cite: 525]",
            "A developer writes a hash function to tell DynamoDB how to partition the items. [cite: 526]"
        ],
        correct: [1]
    },
    {
        question: "Suppose that a developer has a restaurants database table that can be queried by name (the partition key), or by name and location (the sort key). What should the developer do if they also want to query by type of cuisine and average customer rating? [cite: 530, 531]",
        options: [
            "Set up a local secondary index on cuisine and customer rating. [cite: 532]",
            "Set up a global secondary index on cuisine and customer rating. [cite: 533]",
            "Change the primary key on the restaurant table to be a complex primary key based on cuisine and customer rating. [cite: 534]",
            "Perform a query that uses the cuisine and average customer rating attributes. [cite: 535]"
        ],
        correct: [1]
    },
    {
        question: "A video game developer who uses Amazon DynamoDB wants to ensure that players' profiles are updated correctly when they make in-game purchases. This process requires multiple updates as part of a single user action. What is the best choice to write this developer's application to manage these complex, all-or-nothing changes? [cite: 539, 540, 541]",
        options: [
            "Add an Amazon DynamoDB Accelerator (DAX) cluster. [cite: 542]",
            "Implement global tables. [cite: 543]",
            "Create application code to check that all parts of the transaction were written successfully, and then roll back the update if any part failed. [cite: 544, 545]",
            "Use DynamoDB transactions. [cite: 546]"
        ],
        correct: [3]
    },
    {
        question: "Which scenarios are example use cases for Amazon DynamoDB Streams? (Select TWO.) [cite: 556]",
        options: [
            "An application that requires the fastest possible response time for reads to support real-time bidding [cite: 561]",
            "An application that requires repeated reads against a large set of regional weather data to perform a long-running analysis [cite: 562]",
            "An application that automatically sends notifications to the mobile devices of all friends in a group when one friend uploads a new picture [cite: 563, 564]",
            "An application that must monitor changes to a DynamoDB table and take action on specific changes when a value reaches a certain threshold [cite: 565]",
            "An application that requires an in-memory data store [cite: 566]"
        ],
        correct: [2, 3]
    },
    {
        question: "Which statement about global tables is true? [cite: 571]",
        options: [
            "Global tables provide a managed solution for replicating tables within a single AWS Region. [cite: 576]",
            "Global tables use Amazon Simple Storage Service (Amazon S3) to propagate changes between replicas. [cite: 577, 578]",
            "When a global table is created, Amazon DynamoDB performs all necessary tasks to create identical tables and propagate ongoing data changes to specified Regions. [cite: 579]",
            "With a global table, Amazon DynamoDB supports partial replication of some of the items in a table. [cite: 580]"
        ],
        correct: [2]
    },
    {
        question: "How far back in days can an Amazon DynamoDB table be restored by using point-in-time recovery? [cite: 585]",
        options: [
            "The last week [cite: 586]",
            "The last 10 days [cite: 590]",
            "The last 35 days [cite: 591]",
            "The last calendar month [cite: 593]"
        ],
        correct: [2]
    },
    {
        question: "Which statement describes Amazon DynamoDB application programming interface (API) control operations that can be invoked by an application? [cite: 596, 597]",
        options: [
            "Create and manage DynamoDB tables. [cite: 600]",
            "Create, read, update, and delete data in a table. [cite: 601]",
            "Get and write batches of items in a DynamoDB table. [cite: 602]",
            "Make coordinated, all-or-nothing changes to multiple items both within and across tables. [cite: 603]"
        ],
        correct: [0]
    },

    // ---------------- Module 6 ----------------
    {
        question: "Which phrase best describes a RESTful API? [cite: 609]",
        options: [
            "An API that uses HTTP to communicate between client and server [cite: 615]",
            "A proxy that exists between client and server to handle common problems that occur with API-driven applications [cite: 618]",
            "An API that follows the principles of the Representational State Transfer style [cite: 621, 622]",
            "An API that resides on the web server [cite: 623]"
        ],
        correct: [2]
    },
    {
        question: "Which option suggests the use of WebSocket APIs? [cite: 624]",
        options: [
            "An order processing application returns an order number to each customer when they submit an order. [cite: 630]",
            "A batch process bundles orders and sends them to a fulfillment center application. [cite: 631]",
            "A real-time chat application lets customers talk to customer support about their orders. [cite: 632]",
            "A reporting application gives the sales team access to static daily reports from their phones. [cite: 633]"
        ],
        correct: [2]
    },
    {
        question: "Which use case suggests using Amazon API Gateway HTTP APIS? [cite: 634]",
        options: [
            "An application needs an API proxy in front of an AWS Lambda function. [cite: 635]",
            "An application must transform a response from an AWS Lambda function before returning the response to the client. [cite: 637, 638]",
            "A developer wants to use mock endpoints to test their API. [cite: 639]",
            "A developer wants to assign different API quotas by client. [cite: 640]"
        ],
        correct: [0]
    },
    {
        question: "Which statement about Amazon API Gateway integrations is true? [cite: 641]",
        options: [
            "A first-class integration connects an API Gateway HTTP API route to an external third-party service API. [cite: 645]",
            "A developer can use HTTP proxy integrations to direct a route to a resource on the internet. [cite: 646]",
            "API Gateway cannot access resources within a virtual private cloud (VPC). [cite: 647]",
            "An API integration request encapsulates an HTTP request that the backend receives and is always different from the method request that the client submits. [cite: 649, 650]"
        ],
        correct: [1]
    },
    {
        question: "An application that uses Amazon API Gateway must capture contact information from a third-party client application. The client application sends given name, surname, business phone, and cell phone. The backend application database has only two fields: name and mobile phone. Which option requires the fewest application changes? [cite: 652, 653, 654]",
        options: [
            "Export the API definition and use it to update the client. [cite: 655]",
            "Use a mapping template to transform the request before it is sent to the database. [cite: 656, 657]",
            "Create a usage plan that describes the fields and applies only to this client. [cite: 658]",
            "Use a first-class integration to connect the client to the database. [cite: 660]"
        ],
        correct: [1]
    },
    {
        question: "Which elements are part of the base URI that AWS generates for an Amazon API Gateway API? [cite: 661]",
        options: [
            "Region and stage name [cite: 663]",
            "API identifier and version [cite: 664]",
            "Account ID and stage name [cite: 665]",
            "Region and version [cite: 666]"
        ],
        correct: [0]
    },
    {
        question: "Given this snippet: `aws apigatewayv2 create-route --api-id 03z501670a --<?> --target arn:aws:lambda:us-east-2:AcctID:function:readFn`. Which option could replace the <?> to create an API route that returns an individual product value from an online catalog? [cite: 667, 668, 669, 670, 671, 672]",
        options: [
            "route-key 'GET/products/{product_id}' [cite: 673]",
            "route-key 'PUT/products' [cite: 674]",
            "route-selection-expression $GET/product [cite: 676]",
            "route-selection-expression 'PUT/products/{proxy+}' [cite: 677]"
        ],
        correct: [0]
    },
    {
        question: "Which statement about Amazon API Gateway stages is true? [cite: 678]",
        options: [
            "Stage names are sequentially assigned based on the API version. [cite: 679]",
            "Any stage on any API type can be set to autodeploy. [cite: 680]",
            "Developers can use stage variables to connect different stages to different backends. [cite: 683, 684]",
            "Developers should avoid creating different stages for each development environment. [cite: 685]"
        ],
        correct: [2]
    },
    {
        question: "A security team wants to know how to protect APIs in their internet application from common web exploits, like SQL injection or cross-site scripting. Which solution most directly addresses their specific concern? [cite: 686, 687]",
        options: [
            "Set throttling limits on their API methods in Amazon API Gateway. [cite: 688]",
            "Set all of their APIs to use private endpoints. [cite: 692]",
            "Configure a JSON Web Token (JWT)-based authorizer for Amazon API Gateway. [cite: 693]",
            "Use AWS WAF with Amazon API Gateway. [cite: 694]"
        ],
        correct: [3]
    },
    {
        question: "What does the Amazon API Gateway integration Latency metric tell the user? [cite: 696]",
        options: [
            "Frequency of server-side errors that affect latency [cite: 697]",
            "Speed of the API response back to the client [cite: 699]",
            "Responsiveness of the backend [cite: 701]",
            "How often requests are throttled [cite: 702]"
        ],
        correct: [2]
    },

    // ---------------- Module 7 ----------------
    {
        question: "Which statement describes a characteristic of AWS Lambda? [cite: 704]",
        options: [
            "Lambda runs code only when it is activated by an event and uses only the compute resources that are needed. [cite: 706, 707]",
            "A developer's methods and configuration options for ensuring high availability with Lambda are similar to their approach with Amazon Elastic Compute Cloud (Amazon EC2). [cite: 708]",
            "Lambda functions run in on-demand, temporary environments, and the developer controls when new environments are created or shut down. [cite: 711]",
            "A developer must write Lambda functions that use one of the runtimes that the Lambda service provides. [cite: 712]"
        ],
        correct: [0]
    },
    {
        question: "Which constraint cannot be modified? [cite: 713]",
        options: [
            "Function timeout [cite: 714]",
            "Reserved concurrency [cite: 715]",
            "Burst quota [cite: 716]",
            "Regional quota [cite: 717]"
        ],
        correct: [2]
    },
    {
        question: "Which option describes how Amazon API Gateway invokes AWS Lambda? [cite: 724]",
        options: [
            "API Gateway directly invokes a function with a synchronous invocation. [cite: 725]",
            "Lambda processes API Gateway requests asynchronously and retries each request up to two times. [cite: 726]",
            "Lambda uses an event source mapping and polls API Gateway for requests [cite: 728]",
            "API Gateway directly invokes a function and retries the request until it succeeds or expires. [cite: 729, 730]"
        ],
        correct: [0]
    },
    {
        question: "Which actions require permissions that are defined in the AWS Lambda execution role? (Select TWO.) [cite: 732]",
        options: [
            "A Lambda function writes to an Amazon DynamoDB table. [cite: 733]",
            "An object that is written to an Amazon Simple Storage Service (Amazon S3) bucket initiates invocation of a Lambda function. [cite: 737, 738]",
            "Lambda polls an Amazon Simple Queue Service (Amazon SQS) queue for messages that initiate invocation of a Lambda function. [cite: 739]",
            "An Amazon API Gateway GET route initiates invocation of a Lambda function. [cite: 740]",
            "A message that is posted to an Amazon Simple Notification Service (Amazon SNS) topic initiates invocation of a Lambda function. [cite: 741]"
        ],
        correct: [0, 2]
    },
    {
        question: "Which statement about the function handler in an AWS Lambda function is true? [cite: 742]",
        options: [
            "The function handler is the entry point that Lambda calls to start running the Lambda function. [cite: 743, 744]",
            "The function handler method might take an event object or a context object. [cite: 745]",
            "The event object provides information about the event that invoked the Lambda function. It must be a predefined object that an AWS service generates. [cite: 746, 747]",
            "The context object provides runtime information, and the developer must create a context object that matches the runtime that was selected for the function. [cite: 748]"
        ],
        correct: [0, 2] // อิงจาก checkmark ทั้งคู่
    },
    {
        question: "Which issue might be addressed by adding provisioned concurrency to an AWS Lambda function? [cite: 749]",
        options: [
            "Another Lambda function runs in the same account and Region. It sometimes spikes and consumes all available concurrency, causing the function to fail. [cite: 751, 752]",
            "An application that uses the Lambda function responds slowly for the first few users who sign in each day. Lambda metrics show higher latency for those initial requests. [cite: 753, 754]",
            "A legacy backend system fails intermittently when the developer connects to it. To avoid extra costs, they want to reduce the function's wait time when the backend fails. [cite: 757, 758]",
            "The developer wants more visibility into transactions that use the Lambda function to identify bottlenecks. [cite: 759]"
        ],
        correct: [1]
    },
    {
        question: "Which AWS Lambda configuration setting might a developer use to manage function errors when configuring an Amazon Simple Notification Service (Amazon SNS) topic as the event source for a Lambda function? (Select TWO.) [cite: 760, 761]",
        options: [
            "State machines [cite: 762]",
            "File systems [cite: 763]",
            "Destinations [cite: 766]",
            "Virtual private cloud [cite: 767]",
            "Asynchronous invocations [cite: 768]"
        ],
        correct: [2, 4]
    },
    {
        question: "A zipped deployment package including code and custom libraries is 75 MB in size. Which AWS Lambda deployment option should be used? [cite: 769, 770]",
        options: [
            "Copy the code into the Lambda console editor to create and deploy the function. [cite: 773]",
            "Upload a zip file from an integrated development environment (IDE) to load the deployment package directly into the Lambda console. [cite: 774]",
            "Upload the deployment package to an Amazon Simple Storage Service (Amazon S3) bucket, and specify the bucket name and object key on the Lambda console. [cite: 775]",
            "Upload the deployment package to an Amazon Elastic Block Store (Amazon EBS) volume, and use the File Systems configuration to reference it. [cite: 777]"
        ],
        correct: [2]
    },
    {
        question: "A function's Amazon Resource Name (ARN) is as follows: arn:aws:lambda:aws-region:acct-id:function:helloworld:PROD Which statement about this function is correct, based on its ARN? [cite: 778, 779, 780]",
        options: [
            "This ARN will invoke the immutable PROD version of the function. [cite: 784]",
            "This ARN will invoke the version of the function that is currently associated with the PROD alias. [cite: 785]",
            "This ARN will invoke the function and include the AWS Lambda layer that is named PROD. [cite: 786]",
            "This ARN will deploy the helloworld function into the PROD account. [cite: 787]"
        ],
        correct: [1]
    },
    {
        question: "Users of a serverless application have reported errors that occur when they try to retrieve order information. Assuming that AWS X-Ray is enabled, what is the first step the developer might take in X-Ray to start troubleshooting the reported issues quickly? [cite: 789, 790]",
        options: [
            "Drill down into the most recent traces to look for errors. [cite: 791]",
            "Search for metadata that is related to the users who are reporting issues. [cite: 792]",
            "Add annotations that the developer can use to start grouping and filtering traces. [cite: 794, 795]",
            "Use the service map to visually locate errors across the application. [cite: 796]"
        ],
        correct: [3]
    },

    // ---------------- Module 8 ----------------
    {
        question: "Which option describes a benefit that led the shipping industry and the software industry to use containers? [cite: 799]",
        options: [
            "Infrastructure providers can create strong dependencies between their platform and the types of containers that they choose to work with. [cite: 804]",
            "The abstraction of details of what's being 'shipped' increases the agility of a system. [cite: 805]",
            "Increased visibility into the details of what's being 'shipped' helps each point in the system to provide the right type of support [cite: 806]",
            "The ability to use nonstandard types of containers gives producers flexibility. [cite: 807]"
        ],
        correct: [1]
    },
    {
        question: "Which options are components of a container? (Select TWO.) [cite: 808]",
        options: [
            "Host server [cite: 809]",
            "Runtime engine [cite: 811]",
            "Operating system [cite: 812]",
            "Application code [cite: 814]",
            "Virtual machine [cite: 815]"
        ],
        correct: [1, 3]
    },
    {
        question: "Which statement about Docker containers is true? [cite: 816]",
        options: [
            "A container is a runnable instance of an image. [cite: 818]",
            "A container registry is a template to launch containers. [cite: 819]",
            "A container image is a writeable template. [cite: 820]",
            "A container layer is a thin read-only layer that is associated with a running container. [cite: 822, 823]"
        ],
        correct: [0]
    },
    {
        question: "Which Docker CLI command creates a container named my_app_1 from the image named node_app? [cite: 824, 825]",
        options: [
            "docker run --name my_app_1 node_app [cite: 826]",
            "docker build-tag my_app_1 [cite: 827]",
            "docker exec -it my app_1 sh [cite: 828]",
            "docker images my app 1 from node app [cite: 829]"
        ],
        correct: [0]
    },
    {
        question: "Which statement about a Dockerfile is true? [cite: 830]",
        options: [
            "A Dockerfile is a YAML file that provides instructions to create a container image. [cite: 832]",
            "Each instruction in a Dockerfile creates a read-only layer in the image. [cite: 833]",
            "If a developer changes the Dockerfile and rebuilds the image, all layers of the image must be rebuilt. [cite: 835, 836]",
            "Developers cannot use the Dockerfile to run scripts that would run after the container is instantiated. [cite: 837]"
        ],
        correct: [1]
    },
    {
        question: "A developer wants to migrate a monolithic shopping website to a microservice-based application. Which option reflects a reason to choose containers? [cite: 838, 839]",
        options: [
            "Each container can use the language and technology that are best suited for the service. [cite: 843]",
            "Containerized components are not isolated, so the application will evolve as a singular system. [cite: 844]",
            "Containers are well-suited to designs that avoid the use of temporary resources. [cite: 845]",
            "Containers separate your dependencies and libraries into their own objects. [cite: 846]"
        ],
        correct: [0]
    },
    {
        question: "A developer recently built a proof-of-concept application using containers, and the business owner wants to roll it out to production. Which option reflects a primary reason that the developer might use a container orchestration service? [cite: 847, 848]",
        options: [
            "To schedule container starts and stops and determine where to place containers [cite: 853]",
            "To base their containers on third-party images [cite: 854]",
            "To remove the requirement to use a container registry [cite: 855]",
            "To receive automated recommendations about how to improve their application code to run on containers [cite: 856]"
        ],
        correct: [0]
    },
    {
        question: "Which statement about the Amazon Elastic Container Service (Amazon ECS) is true? [cite: 857]",
        options: [
            "Amazon ECS is a highly scalable container orchestration service that supports Docker containers. [cite: 860]",
            "Amazon ECS requires the use of the Amazon Elastic Container Registry (Amazon ECR) for container images. [cite: 861, 862]",
            "Amazon ECS supports launching containers in Amazon EC2 or AWS Lambda. [cite: 863]",
            "With Amazon ECS, you can deploy applications to containers even if they have not been architected specifically to run on containers. [cite: 865, 866]"
        ],
        correct: [0]
    },
    {
        question: "What is the name for a logical collection of AWS Elastic Beanstalk components, which is conceptually similar to a folder? [cite: 867]",
        options: [
            "Environment [cite: 868]",
            "Platform [cite: 869]",
            "Application [cite: 870]",
            "Environment tier [cite: 871]"
        ],
        correct: [2]
    },
    {
        question: "A developer wants to do canary testing on a new deployment. Which AWS Elastic Beanstalk deployment policy option should the developer use? [cite: 872, 873]",
        options: [
            "Immutable [cite: 874]",
            "Rolling with batch [cite: 875]",
            "Blue/Green [cite: 878]",
            "Traffic Splitting [cite: 879]"
        ],
        correct: [3]
    },

    // ---------------- Module 9 ----------------
    {
        question: "An architect suggests that the developers implement caching on an existing application to address performance issues. Which option describes factors that the developers should consider when they decide where to add caching? [cite: 882, 883]",
        options: [
            "Avoid caching for data queries that are slow and expensive to run. [cite: 884]",
            "Review the data and its access patterns. Data that changes rapidly but is infrequently accessed should be cached. [cite: 886]",
            "Consider the tolerance for stale data in each context where the data is used. [cite: 887]",
            "Add as much caching in as many places as you can as early in development as possible. [cite: 889]"
        ],
        correct: [2]
    },
    {
        question: "A developer has determined that an in-memory key-value store would improve performance of their application's queries. They want to keep the solution as simple as possible and need to support read replicas. Which option should they choose? [cite: 890, 891, 892]",
        options: [
            "Amazon ElastiCache for Memcached [cite: 894]",
            "Amazon ElastiCache for Redis [cite: 897]",
            "Amazon CloudFront Functions [cite: 898]",
            "Lambda@Edge [cite: 899]"
        ],
        correct: [1]
    },
    {
        question: "Amazon ElastiCache is being added to an application to improve response times and alleviate database pressure. The backend database for the application is an Amazon Relational Database Service (Amazon RDS) database. Which task would be the responsibility of the application developer? [cite: 900, 901, 902]",
        options: [
            "Applying software patches to the cache instances [cite: 904]",
            "Writing code to check the health of the cluster before writing to the cache [cite: 905]",
            "Writing code that looks for the requested data in the cache and, if the data is not found, requests it from the origin [cite: 906]",
            "Write code to integrate the cache with the Amazon RDS instances that it will be reading from [cite: 908, 909]"
        ],
        correct: [2]
    },
    {
        question: "Which statement about Amazon ElastiCache is true? [cite: 910]",
        options: [
            "A node is a variable-size chunk of secure, network-attached RAM. [cite: 911]",
            "Your application connects to an ElastiCache node by using a unique address called an endpoint. [cite: 915]",
            "With the Memcached engine, data is partitioned across shards in a cluster. [cite: 916]",
            "Every node within a cluster must run the same cache engine, but the nodes can run on different instance types. [cite: 917]"
        ],
        correct: [1]
    },
    {
        question: "A developer has been asked to address complaints from customers in the London area about the performance of a web-based application that is hosted in New York. Which option might the developer implement? [cite: 918, 919]",
        options: [
            "Use Amazon CloudFront to replicate the application code on Amazon Elastic Compute Cloud (Amazon EC2) instances in the London Region. [cite: 923]",
            "Set up a CloudFront distribution that can serve static content from edge locations that are closer to UK users. [cite: 924]",
            "Set up a CloudFront regional edge location in the London Region. [cite: 925]",
            "Set up one CloudFront edge location in New York and one in London. [cite: 926]"
        ],
        correct: [1]
    },
    {
        question: "A developer has been asked to increase the cache hit ratio for their Amazon CloudFront distribution. Which option should they try? [cite: 928, 929]",
        options: [
            "Include only the minimum necessary values in the cache key. [cite: 930]",
            "Decrease the maximum time to live (TTL) setting in a cache policy. [cite: 931]",
            "Decrease the max-age setting in a file's Cache-Control header. [cite: 933]",
            "Increase the cache hit setting in a cache policy. [cite: 934]"
        ],
        correct: [0]
    },
    {
        question: "Which statement about Amazon CloudFront cached file expiration is true? [cite: 935]",
        options: [
            "Each file in the cache automatically expires after 24 hours, and you cannot modify this setting. [cite: 939]",
            "After a file expires, the next time the edge location gets a user request for the file, CloudFront forwards the request to the origin server. [cite: 940]",
            "When the origin receives a request, the origin sends the latest version of the file regardless of whether it is the same as the expired version in the cache. [cite: 941]",
            "You can control cache file duration with CloudFront cache policy settings or through Cache-Control settings in the origin file headers. However, you cannot combine these options. [cite: 942, 943]"
        ],
        correct: [1]
    },
    {
        question: "Which use case suggests the use of Amazon CloudFront Functions? [cite: 944]",
        options: [
            "A function that redirects the viewer to a different URL and adds a custom response header [cite: 946]",
            "A function that uses a third-party library [cite: 947]",
            "A function that requires network access to use external services for processing [cite: 950]",
            "A function that requires access to the body of HTTP requests [cite: 951]"
        ],
        correct: [0]
    },
    {
        question: "Which statement reflects a benefit of lazy loading as a caching strategy? [cite: 952]",
        options: [
            "Lazy loading avoids filling up the cache with data that is not requested. [cite: 954]",
            "With lazy loading, data in the cache never becomes stale. [cite: 955]",
            "With lazy loading, every write involves two trips-a write to the cache and a write to the database-which adds latency to the process. [cite: 958]",
            "Lazy loading might result in cache chum. The cache might be updated often if certain records are updated repeatedly. [cite: 959]"
        ],
        correct: [0]
    },
    {
        question: "A developer has been asked whether caching might improve the performance of their online bidding application. How should they answer this question? [cite: 960, 961]",
        options: [
            "Caching probably will not yield much performance improvement for this type of application. [cite: 963]",
            "Caching might improve performance by reducing the number of hits to the backend database. However, caching cannot improve performance issues that occur between the client and the web server. [cite: 964, 965]",
            "Using different types of caching at each application layer might improve both the frontend and backend performance. [cite: 967]",
            "Caching might greatly improve performance if the application is compute heavy, but if the application is read heavy, a cache will not provide much benefit [cite: 968]"
        ],
        correct: [2]
    },

    // ---------------- Module 10 ----------------
    {
        question: "Which option describes how a message queue processes messages? [cite: 972]",
        options: [
            "The queue polls producers for new messages. [cite: 973]",
            "Consumers poll the queue for messages. [cite: 976]",
            "The queue broadcasts messages to consumers. [cite: 977]",
            "Consumers notify the queue when a message has been successfully processed. The queue configuration determines whether the message should be available to other consumers. [cite: 978, 979]"
        ],
        correct: [1]
    },
    {
        question: "Which option describes how publish/subscribe (pub/sub) messaging works? [cite: 980]",
        options: [
            "Producers send messages to subscribers. [cite: 982]",
            "Subscribers poll topics for new messages. [cite: 983]",
            "When a topic receives a new message, the topic sends the message to the first subscriber who responds to a notification. [cite: 986, 987]",
            "A new topic message is pushed out to all topic subscribers. [cite: 988]"
        ],
        correct: [3]
    },
    {
        question: "A developer wants to add an Amazon Simple Queue Service (Amazon SQS) queue to decouple incoming order requests from a backend database. Which Amazon SQS operations might be part of this update? (Select TWO) [cite: 989, 990]",
        options: [
            "Use the SendMessage operation with the QueueURL mapped to the database endpoint to put messages on the queue. [cite: 995]",
            "Use the ReceiveMessage operation with MaxNumberOfMessages set to 5 to retrieve up to 5 messages off the queue at one time. [cite: 996]",
            "Use the DeleteMessage operation to change the visibility of the message as soon as the ReceiptHandle is received. [cite: 997]",
            "Use the ReceiveMessage operation with the Wait TimeSeconds parameter set to reduce the number of empty requests. [cite: 998]"
        ],
        correct: [0, 3]
    },
    {
        question: "A tester reports that Amazon Simple Queue Service (Amazon SQS) messages are being processed more than once. The developer finds that processing servers are not completing as quickly as expected, and messages are made available to other consumers before the prior consumer deletes them. Which option might reduce occurrences of this issue? [cite: 999, 1000, 1001]",
        options: [
            "Increase the visibility timeout. [cite: 1002]",
            "Increase maxReceiveCount. [cite: 1003]",
            "Increase MaxNumber Of Messages. [cite: 1004]",
            "Increase the number of producers on the queue. [cite: 1005]"
        ],
        correct: [0]
    },
    {
        question: "For an order-processing application that uses an Amazon Simple Queue Service (Amazon SQS) queue, a developer finds that an older version of the client generate order records that fail the backend process. The failures cause a bottleneck on the queue. How might the developer reduce the impact of the failed records? [cite: 1006, 1007]",
        options: [
            "Increase the visibility timeout and set a high value for MaxNumber Of Messages. [cite: 1012]",
            "Add a dead-letter queue and set a low maxReceiveCount. [cite: 1013]",
            "Use long polling and set a high wait time. [cite: 1014]",
            "Change the queue type from standard to First-In-First-Out (FIFO) and set a high throughput rate. [cite: 1015]"
        ],
        correct: [1]
    },
    {
        question: "Which statement about Amazon Simple Queue Service (Amazon SQS) polling options is true? [cite: 1016]",
        options: [
            "By default, when you make a ReceiveMessage API call, Amazon SQS performs long polling. [cite: 1018]",
            "When long polling is configured, WaitTimeSeconds is set to 0. [cite: 1019]",
            "When short polling is configured, Amazon SQS queries all of its servers. [cite: 1022]",
            "When short polling is configured, Amazon SQS samples a subset of its servers. [cite: 1023]"
        ],
        correct: [3]
    },
    {
        question: "Which statement about Amazon Simple Notification Service (Amazon SNS) is true? [cite: 1024]",
        options: [
            "An SNS topic is a logical access point, which acts as a communication channel. [cite: 1026]",
            "A publisher can only send messages to topics that they have created. [cite: 1027]",
            "By default, different subscribers to a topic receive different messages. [cite: 1030]",
            "Amazon SNS defines a single delivery policy, which is applied to all delivery protocols. [cite: 1031]"
        ],
        correct: [0]
    },
    {
        question: "An Amazon Simple Notification Service (Amazon SNS) topic receives messages about orders. An AWS Lambda function that processes canceled orders is subscribed to the topic. How might the developer reduce costs by only invoking the Lambda function for canceled orders? [cite: 1032, 1033, 1034]",
        options: [
            "Put an Amazon Simple Queue Service (Amazon SQS) queue in front of the Lambda function. [cite: 1039]",
            "Separate the new order and cancel order messages to be sent by two different publishers. [cite: 1040]",
            "Set up a filter policy so that the Lambda function subscription only receives cancel order messages. [cite: 1041]",
            "Use the ConfirmSubscription operation to limit which messages the Lambda function receives. [cite: 1042]"
        ],
        correct: [2]
    },
    {
        question: "A developer needs to build a custom application to put customer application log records onto an Amazon Kinesis data stream. What should they use to build the application? [cite: 1043, 1044]",
        options: [
            "Use the Kinesis API. [cite: 1048]",
            "Use the Kinesis Producer Library (KPL). [cite: 1049]",
            "Use the Kinesis Client Library (KCL). [cite: 1050]",
            "Use Amazon Managed Service for Apache Flink. [cite: 1051]"
        ],
        correct: [1]
    },
    {
        question: "Which statement about Amazon Kinesis Data Streams is true? [cite: 1052]",
        options: [
            "When a record is added to the stream, the record is available until a consumer deletes it. [cite: 1057]",
            "The data records in a data stream are distributed into shards. [cite: 1058]",
            "A standard data stream can have one consumer. With the enhanced fanout option, you can add multiple consumers. [cite: 1059]",
            "A stream consumer must delete the records that it processes successfully. [cite: 1060]"
        ],
        correct: [1]
    },

    // ---------------- Module 11 ----------------
    {
        question: "Which scenario suggests the need for a task coordination service such as AWS Step Functions? [cite: 1062]",
        options: [
            "A website that serves static content is expanding its reach to a global audience. [cite: 1067]",
            "A serverless application must run a series of AWS Lambda functions that are dependent on each other. [cite: 1068]",
            "A monolithic application that is written in Java is updating its technology stack. [cite: 1069]",
            "A reporting application must update its calculation logic to provide more analytical data to business users. [cite: 1070]"
        ],
        correct: [1]
    },
    {
        question: "Which statement describes a benefit of using AWS Step Functions for an application? [cite: 1071]",
        options: [
            "Step Functions integrates with state machines so that developers can transition between their Step Functions workflow and their state machine workflow. [cite: 1072]",
            "Step Functions can be configured with Amazon EC2 Auto Scaling to scale up and down. [cite: 1074]",
            "Step Functions can be defined by using either Python or Node.js. [cite: 1075]",
            "Developers can use Step Functions to build visual workflows. [cite: 1076]"
        ],
        correct: [3]
    },
    {
        question: "What is the role of the Task state type in AWS Step Functions? [cite: 1077]",
        options: [
            "Task states are used to stop a failed workflow. [cite: 1078]",
            "Task states perform a unit of work. [cite: 1079]",
            "Task states provide branching logic. [cite: 1080]",
            "Task states tell the state machine the order to perform the steps in. [cite: 1081]"
        ],
        correct: [1]
    },
    {
        question: "An application that processes order returns must complete different steps depending on whether the return is within 30 days of purchase. Which AWS Step Functions state could a developer use to implement this logic? [cite: 1082, 1083]",
        options: [
            "Parallel [cite: 1084]",
            "Task [cite: 1085]",
            "Choice [cite: 1087]",
            "Wait [cite: 1089]"
        ],
        correct: [2]
    },
    {
        question: "An application that processes order returns must run the same AWS Lambda function for each item in an order. Which AWS Step Functions state could a developer use to implement this logic? [cite: 1091, 1092]",
        options: [
            "Parallel [cite: 1094]",
            "Pass [cite: 1096]",
            "Map [cite: 1097]",
            "Task [cite: 1099]"
        ],
        correct: [2]
    },
    {
        question: "Which statement is true for both Succeed states and Fail states? [cite: 1101]",
        options: [
            "Succeed states and Fail states do not include the Next field. [cite: 1102]",
            "The End field is not required because Succeed states and Fail states are not terminal states. [cite: 1106]",
            "The Type field is optional for Succeed states and Fail states. [cite: 1107]",
            "The End field is required because Succeed states and Fail states are terminal states. [cite: 1108]"
        ],
        correct: [0]
    },
    {
        question: "An application that processes order returns must run two independent audit checks. When both checks are successfully completed, the return authorization step is run. Which AWS Step Functions state could a developer use to implement this logic? [cite: 1109, 1110, 1111]",
        options: [
            "Parallel [cite: 1112]",
            "Task [cite: 1116]",
            "Choice [cite: 1117]",
            "Wait [cite: 1118]"
        ],
        correct: [0]
    },
    {
        question: "How is a task Token used in an AWS Step Functions use case that includes a manual approval step? [cite: 1119]",
        options: [
            "A task Token is generated when the workflow hits a Wait state. The task Token tracks how long the workflow has been waiting for a task to finish. [cite: 1121, 1122]",
            "A task Token is used to transition between each state in the workflow and is defined in the Next field. [cite: 1126]",
            "A task Token is returned as part of a call to the GetActivity Task action and is used when calling the SendTaskSuccess action to associate a result with a task. [cite: 1127]",
            "A task Token is an output of the Success state in a synchronous Step Functions Express workflow. [cite: 1128]"
        ],
        correct: [2]
    },
    {
        question: "Which use case is a good fit for AWS Step Functions Express workflows? [cite: 1130]",
        options: [
            "All workflows in the application must be auditable up to 90 days after a completed run. [cite: 1133]",
            "The workflow requires a step that will run an application that is hosted on an Amazon Elastic Compute Cloud (Amazon EC2) instance. [cite: 1134, 1135]",
            "The workflow takes between 30 minutes and 1 hour to run. [cite: 1136]",
            "The workflow must support a very high rate of events that come from Internet of Things (IoT) devices. [cite: 1138]"
        ],
        correct: [3]
    },
    {
        question: "Which statement about AWS Step Functions is true? [cite: 1139]",
        options: [
            "A developer can use Amazon API Gateway to associate their Step Functions APIs wit methods in an API Gateway API [cite: 1144]",
            "Step Functions has quotas at the account level regarding the number of registered state machines, but no quotas are related to individual Step Functions runs. [cite: 1145]",
            "Step Functions must be created in the visual editor on the Step Functions console but can be edited with the AWS SDKS. [cite: 1146]",
            "A developer can use the Describe API action to get a summary of all state machines and the number of times that each has been run. [cite: 1147, 1148]"
        ],
        correct: [0]
    },

    // ---------------- Module 12 ----------------
    {
        question: "Which statement about creating secure connections is true? [cite: 1150]",
        options: [
            "Both Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are standards that AWS developed for secure communications. [cite: 1152]",
            "SSL uses certificates to establish website identity, but TLS does not. [cite: 1153]",
            "Both SSL and TLS encrypt network communications between connected resources. [cite: 1156]",
            "SSL is a newer version of TLS. Both are used to establish the identify of websites. [cite: 1157]"
        ],
        correct: [2]
    },
    {
        question: "Which step in the secure connection process is the responsibility of the certificate authority (CA)? [cite: 1158, 1159]",
        options: [
            "Issue a certificate. [cite: 1160]",
            "Verify whether the certificate is from a trusted source. [cite: 1161]",
            "Send an encrypted session key. [cite: 1163]",
            "Send a certificate and public key to the client. [cite: 1164]"
        ],
        correct: [0]
    },
    {
        question: "Which statement about AWS Certificate Manager (ACM) is true? [cite: 1165]",
        options: [
            "ACM can provision public certificates, but for private certificates, developers must produce their own certificate and connect it to ACM. [cite: 1167, 1168]",
            "ACM manages certificate renewals for both public and private certificates. [cite: 1169]",
            "ACM costs are based on the number of active public certificates in an AWS account. [cite: 1172]",
            "A developer must configure a load balancer to use ACM certificates. [cite: 1173]"
        ],
        correct: [1]
    },
    {
        question: "Which statement reflects a best practice for security credentials? [cite: 1174]",
        options: [
            "Only share access keys between users in the same AWS account. [cite: 1175]",
            "Use AWS Identity and Access Management (IAM) roles to retrieve temporary security credentials. [cite: 1178]",
            "If there are unencrypted access keys, embed them in code that is available only to developers but not accessible to users. [cite: 1179]",
            "Do not allow programmatic authentication to AWS services. [cite: 1180]"
        ],
        correct: [1]
    },
    {
        question: "What is the primary difference between AWS Security Token Service (AWS STS) authentication by federated users and AWS STS authentication by AWS Identity and Access Management (IAM) users? [cite: 1181]",
        options: [
            "With federated users, the application calls an identity broker, but this step is skipped with IAM users. [cite: 1185]",
            "With federated users, the first authentication is made against an IdP. With IAM users, the first authentication is made against IAM. [cite: 1186, 1187]",
            "With federated users, the second authentication is made against an IdP. With IAM users, the second authentication is made against IAM [cite: 1188, 1189]",
            "With federated users, applications use the temporary security credentials and token to make requests to an AWS service. No token is necessary with IAM users. [cite: 1190, 1191]"
        ],
        correct: [1]
    },
    {
        question: "A developer has been asked to investigate how website files have been deleted from an Amazon Simple Storage Service (Amazon S3) bucket. Which approach should they take? [cite: 1192, 1193]",
        options: [
            "Use AWS CloudTrail to search for information about delete object events on the S3 bucket. [cite: 1198]",
            "Use AWS Security Token Service (AWS STS) to block deletions from the S3 bucket. [cite: 1199]",
            "Use AWS Identity and Access Management (IAM) to search for users who have used their delete permissions on the S3 bucket. [cite: 1200]",
            "Use the AWS STS GetSessionToken API call to retrieve information about users who deleted files from the S3 bucket. [cite: 1201]"
        ],
        correct: [0]
    },
    {
        question: "A developer has been asked to add a sign-up and sign-in service to their application. Which Amazon Cognito feature should they use? [cite: 1202, 1203]",
        options: [
            "Amazon Cognito identity pool [cite: 1204]",
            "Amazon Cognito user pool [cite: 1207]",
            "Amazon Cognito Lambda trigger [cite: 1208]",
            "Amazon Cognito access token [cite: 1209]"
        ],
        correct: [1]
    },
    {
        question: "A developer has been asked to reduce the security risk of users who sign in to their application with username and password pairs that they use on other websites. Which Amazon Cognito user pool feature might the developer configure? [cite: 1210, 1211]",
        options: [
            "Identity tokens [cite: 1212]",
            "Phone and email verification [cite: 1213]",
            "Adaptive authentication [cite: 1214]",
            "Compromised credentials check [cite: 1216]"
        ],
        correct: [3]
    },
    {
        question: "Which statement about Amazon Cognito identity pools is true? [cite: 1217]",
        options: [
            "With an identity pool, users can obtain temporary, limited-privilege AWS credentials to access other AWS services. [cite: 1219]",
            "Identity pools replace the need for a third-party identity provider. [cite: 1220]",
            "When using Amazon Cognito identity pools, a user would not also use Amazon Cognito user pools. [cite: 1222]",
            "Identity pools provide sign-up and sign-in functionality for mobile apps. [cite: 1223]"
        ],
        correct: [0]
    },
    {
        question: "A developer plans to use Amazon Cognito user pools with Amazon API Gateway. Which step is part of the user pool authentication flow with API Gateway? [cite: 1224, 1225]",
        options: [
            "A mobile app sends a request to API Gateway, and API Gateway gets JSON Web Tokens (JWTs) from the user pool. [cite: 1230]",
            "A mobile app user authenticates with a user pool, and the user pool returns JWTs to the app. [cite: 1231]",
            "The user pool validates the tokens against an identity pool. [cite: 1232]",
            "Amazon Cognito invokes the API after successfully validating the permissions. [cite: 1233]"
        ],
        correct: [1]
    },

    // ---------------- Module 13 ----------------
    {
        question: "Which option describes the philosophy of DevOps? [cite: 1235]",
        options: [
            "DevOps is about teaching development and operations teams to use the same set of tools to shorten testing and deployment cycles. [cite: 1240]",
            "DevOps is about removing barriers between development and operations functions to optimize productivity and reliability. [cite: 1241]",
            "DevOps culture is reflected in the idea of 'Processes over people,' which means that, with strong processes, any team member can perform any task. [cite: 1242]",
            "DevOps culture is reflected in the idea that tight coupling leads to tighter parity between development, test, and production environments. [cite: 1243]"
        ],
        correct: [1]
    },
    {
        question: "How are DevOps practices reflected in the software development lifecycle for cloud architectures? [cite: 1244]",
        options: [
            "Every phase of the software development lifecycle is automated. [cite: 1245]",
            "Developers can use continuous integration to merge code into their local repository and connect to the test environment for authentic test scenarios. [cite: 1248]",
            "With continuous delivery, developers can deploy code without the need for continuous monitoring. [cite: 1249]",
            "Infrastructure tools compare local development environments to test environments and staging environments, and report on environmental differences so that the operations team can ensure parity. [cite: 1250]"
        ],
        correct: [0]
    },
    {
        question: "How might a developer use AWS CodePipeline in their continuous integration and continuous deployment (CI/CD) process? [cite: 1251]",
        options: [
            "Compile source code, run tests, and produce software packages that are ready to deploy. [cite: 1256]",
            "Host Git-based repositories and provide source control. [cite: 1257]",
            "Deploy to a variety of compute services. [cite: 1258]",
            "Automate the steps that are required to release software based on a release model that the developer defines. [cite: 1259]"
        ],
        correct: [3]
    },
    {
        question: "Which statement about continuous integration and continuous delivery/deployment (CI/CD) is true? [cite: 1260]",
        options: [
            "Continuous deployment reduces the risk of production bugs, but it might increase the time that it takes to deliver new features. [cite: 1262]",
            "Continuous integration requires teams to write automated tests. [cite: 1263]",
            "Continuous delivery extends all the way to production deployment without human intervention. [cite: 1265]",
            "Continuous deployment extends from check-in through production, but some manual intervention occurs after code is checked in and before that code is released to customers. [cite: 1266]"
        ],
        correct: [1]
    },
    {
        question: "A developer wants to use infrastructure as code for their Java-based web application on AWS. Which task might be part of their work? [cite: 1267, 1268]",
        options: [
            "Create an Amazon Elastic Compute Cloud (Amazon EC2) instance by using AWS CodeBuild, and use AWS CodeDeploy to automatically push the application to the EC2 instance. [cite: 1273]",
            "Create a Java AWS CloudFormation template that defines the application and database layers for the application. [cite: 1274]",
            "Create an AWS CloudFormation template with a Resources section that defines the AWS resources for the application. [cite: 1275]",
            "Use AWS CodePipeline to create a pipeline that automates the complete release of the application. [cite: 1276]"
        ],
        correct: [2]
    },
    {
        question: "A developer wants to use a single AWS CloudFormation template for both the test and production environments. Which section of the template might they use to support this approach? [cite: 1277, 1278]",
        options: [
            "Use the Transform section to define the variables that must be changed for each environment during stack creation or update. [cite: 1283]",
            "Use the Format Version section to define the parameters to be passed for each environment during stack creation or update. [cite: 1284, 1285]",
            "Use the Outputs section to define each environment that the template should create during stack creation or update. [cite: 1286, 1287]",
            "Use the Conditions section to control whether certain resources are created during stack creation or update. [cite: 1288]"
        ],
        correct: [3]
    },
    {
        question: "Which statement about AWS CloudFormation stacks is true? [cite: 1289]",
        options: [
            "Deleting a stack deletes its CloudFormation template but does not delete any resources that the most recent deployment created. [cite: 1291]",
            "A CloudFormation stack is a unit of deployment. [cite: 1292]",
            "An existing stack must be deleted before deploying an updated template to modify the resource parameters of that stack. [cite: 1295]",
            "CloudFormation has some quotas that are related to the resources defined in each stack, but no quotas are related to the number of stacks themselves. [cite: 1296, 1297]"
        ],
        correct: [1]
    },
    {
        question: "A developer is building their first serverless application on AWS. What must they think about differently with respect to deploying the application? [cite: 1298, 1299]",
        options: [
            "They can't replicate the production environment locally in the same way that they might with a server-based deployment. [cite: 1304]",
            "They can't use AWS CloudFormation for infrastructure as code to deploy the application. [cite: 1305]",
            "The steps to connect to the AWS Lambda server for debugging are different than those to connect to a traditional server. [cite: 1306]",
            "Serverless development tools are not integrated with other AWS development tools that are used in the deployment pipeline. [cite: 1307, 1308]"
        ],
        correct: [0]
    },
    {
        question: "How does an AWS Serverless Application Model (AWS SAM) template differ from an AWS CloudFormation template? [cite: 1309]",
        options: [
            "AWS SAM templates are written in the same language as the AWS Lambda runtime that is used in the functions that are being deployed. [cite: 1313]",
            "The Globals section is found only in AWS SAM templates. [cite: 1314]",
            "The Resources section in an AWS SAM template may only contain serverless resources [cite: 1315]",
            "The Transform declaration is not required for AWS SAM templates. [cite: 1316]"
        ],
        correct: [1] // อิงจาก checkmark ที่ระบุ
    },
    {
        question: "The following lines are in the Resources section of an AWS Serverless Application Model (AWS SAM) template. What would these lines create? Resources: Orders: Type: AWS::Serverless::SimpleTable [cite: 1317, 1318, 1319, 1320, 1322]",
        options: [
            "An AWS Lambda function that is named Orders and is connected to an Amazon DynamoDB table [cite: 1323, 1324]",
            "An Amazon DynamoDB table that is called Orders [cite: 1325]",
            "An API GET method that reads from the Orders table [cite: 1327]",
            "A MySQL table that is called Orders [cite: 1328]"
        ],
        correct: [1]
    }
];
