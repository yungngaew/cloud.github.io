const quizData = [
    // ---------------- Module 2 ----------------
    {
        question: "The systems development lifecycle (SDLC) has six phases. The first three phases are plan, define, and design. What are the last three phases of the SDLC?",
        options: [
            "Test, deploy, and maintain",
            "Code, build, and maintain",
            "Code, build, and test",
            "Develop, deploy, and maintain"
        ],
        correct: [3]
    },
    {
        question: "Which task is performed during the develop stage of the systems development lifecycle (SDLC)?",
        options: [
            "The system is put into use.",
            "New components are obtained and installed.",
            "New system requirements are defined.",
            "Deficiencies are identified."
        ],
        correct: [1]
    },
    {
        question: "A systems administrator must grant a new developer permissions that are associated with the developer role. This role is associated with the developer group. Which AWS service should the administrator use to assign the new developer to the developer group?",
        options: [
            "Amazon Simple Storage Service (Amazon S3)",
            "Amazon Elastic Compute Cloud (Amazon EC2)",
            "AWS Resource Access Manager (AWS RAM)",
            "AWS Identity and Access Management (IAM)"
        ],
        correct: [3]
    },
    {
        question: "What is an important benefit of AWS CloudShell?",
        options: [
            "Users get 500 MB of storage per region.",
            "You manually patch and update the environment",
            "It inherits your credentials from the AWS Management Console.",
            "You pay up front for reserved blocks of time and capacity."
        ],
        correct: [2]
    },
    {
        question: "What are three ways to interact with AWS service application programming interfaces (APIs)? (Select the THREE best options.)",
        options: [
            "AWS Management Console",
            "Programmatically",
            "AWS software development kits (SDKs)",
            "AWS Command Line Interface (AWS CLI)",
            "AWS X-Ray",
            "AWS CloudTrail"
        ],
        correct: [0, 2, 3]
    },
    {
        question: "Which tool enables users to control their AWS services from the command line and automate service management with scripts?",
        options: [
            "Eclipse IDE (Eclipse Foundation)",
            "AWS Tools for PowerShell",
            "Microsoft Visual Studio Code",
            "AWS Identity and Access Management (IAM)"
        ],
        correct: [1]
    },
    {
        question: "What is Amazon Q Developer?",
        options: [
            "A cloud-based integrated development environment (IDE)",
            "A browser-based CLI",
            "A wizard that leads you through the steps to configure your integrated development environment (IDE)",
            "A generative Al-powered coding assistant"
        ],
        correct: [3]
    },
    {
        question: "Which statements describe AWS resource application programming interfaces (APIs)? (Select TWO.)",
        options: [
            "They provide a lower-level abstraction than the higher-level calls made by service client APIs.",
            "They have objects for request and result data.",
            "They have at least one class per conceptual resource.",
            "They provide a higher-level abstraction than the low-level calls made by service client APIs",
            "They provide access to resources through objects and collections."
        ],
        correct: [3, 4],
        explanation: "Resource APIs provide a higher-level abstraction than the low-level calls made by service client APIs. They consist of classes that represent the conceptual resources you interact with."
    },
    {
        question: "A developer is using the AWS software development kit (SDK) for Python (Boto3) and must specify the Region. Which method enables the developer specify the Region?",
        options: [
            "By setting the AWS PROFILE environment variable",
            "By setting the Region when they instantiate the service client",
            "By associating a default Region with their profile in the credentials file in the .aws folder within their 'home' folder",
            "Users cannot specify the AWS Region in the service client"
        ],
        correct: [1],
        explanation: "Users can set the Region when they instantiate the service client, by setting the AWS_DEFAULT_REGION environment variable, or by setting the default Region in the AWS shared configuration file."
    },
    {
        question: "A developer makes an application programming interface (API) call to access an Amazon Simple Storage Service (Amazon S3) bucket that doesn't exist. Which HTTP response code does the developer receive from the AWS service?",
        options: [
            "400 series",
            "200 series",
            "500 series",
            "300 series"
        ],
        correct: [0],
        explanation: "A 400-series response code means that the application has an error that the developer must address."
    },

    // ---------------- Module 3 ----------------
    {
        question: "A student is learning about Amazon Simple Storage Service (Amazon S3). During an interview, a potential employer asks the student to explain how Amazon S3 can be used as a storage solution. Which option is a use case for Amazon S3?",
        options: [
            "Data lake",
            "Hosting active databases",
            "Shared file systems",
            "Block-level storage"
        ],
        correct: [0]
    },
    {
        question: "A _______ organizes the Amazon Simple Storage Service (Amazon S3) namespace at the highest level.",
        options: [
            "Bucket",
            "Container",
            "Region",
            "Group"
        ],
        correct: [0]
    },
    {
        question: "A developer wants to store image files in a bucket that is called images-bucket, but receives the error BucketAlready Exists. Which action must the developer take to resolve this error?",
        options: [
            "Bucket names are globally unique. If the requested bucket name is not available, the developer must rename the bucket",
            "The developer must contact AWS Support to request approval to use the same bucket name.",
            "Bucket names are unique to the Region that they are created in. If the requested bucket name is not available, the developer must create the imoges-bucket in a different Region.",
            "Bucket names go to the highest bidder. The developer must outbid the current bucket owner."
        ],
        correct: [0]
    },
    {
        question: "A developer is using Amazon Simple Storage Service (Amazon S3) to host a static website in a bucket that is called frank-martha-cafe. This bucket is in the us-east-1 Region. Which URL is the virtual-hosted-style URL for the website?",
        options: [
            "https://s3-website-us-east-1.amazonaws.com/frank-martha-cafe",
            "https://www.frank-martha-cafe.s3-website-us-east-1.amazonaws.com",
            "https://frank-martha-cafe.s3-website-us-east-1.amazonaws.com",
            "https://frank-martha-cafe.s3-us-east-1.amazonaws.com"
        ],
        correct: [2]
    },
    {
        question: "After versioning is enabled on an Amazon Simple Storage Service (Amazon S3) bucket, it can be disabled.",
        options: [
            "True",
            "False"
        ],
        correct: [1],
        explanation: "By default, versioning is disabled in S3 buckets. After you enable versioning, you can only suspend it (you cannot disable it)."
    },
    {
        question: "What is the largest size of an object that a user can upload to Amazon Simple Storage Service (Amazon S3) in a single PUT operation?",
        options: [
            "5 GB",
            "1 GB",
            "100 MB",
            "5 TB"
        ],
        correct: [0]
    },
    {
        question: "A developer uses an Amazon Simple Storage Service (Amazon S3) bucket. They want to allow a certain AWS Identity and Access Management (IAM) user to perform any S3 operations on the bucket and its objects. They also want to follow AWS recommendations for granting permissions. Which mechanism should the developer apply to the bucket?",
        options: [
            "An IAM policy",
            "Bucket policy",
            "Bucket access control list (ACL)",
            "Cross-Origin resource Sharing (CORS)"
        ],
        correct: [1]
    },
    {
        question: "A developer wants to allow a user to download private objects directly from an Amazon Simple Storage Service (Amazon S3) bucket without needing AWS security credentials or permissions. What can the developer share with the user to grant them time-limited access to the objects?",
        options: [
            "The bucket endpoint URL",
            "Their AWS account root user credentials",
            "A temporary token",
            "A presigned URL"
        ],
        correct: [3]
    },
    {
        question: "Which method can be used to encrypt Amazon Simple Storage Service (Amazon S3) objects in transit?",
        options: [
            "Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)",
            "Secure Sockets Layer/Transport Layer Security (SSL/TLS)",
            "Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)",
            "Server-Side Encryption with Customer-Provided Keys (SSE-C)"
        ],
        correct: [1]
    },
    {
        question: "A developer hosts a static website in an Amazon Simple Storage Service (Amazon S3) bucket. The website references image objects in another S3 bucket. However, these images do not display on the website. What could be the problem?",
        options: [
            "The security group of the S3 bucket does not include an inbound rule to allow HTTP traffic on port 80.",
            "Cross-Region Replication (CRR) has not been enabled on the bucket where the assets are stored.",
            "Cross-Origin Resource Sharing (CORS) has not been enabled on the bucket where the assets are stored.",
            "Amazon S3 does not support object sharing between buckets"
        ],
        correct: [2]
    },

    // ---------------- Module 4 ----------------
    {
        question: "Which option is the Amazon Web Services (AWS) customer responsible for under the AWS shared responsibility model? (Select TWO.)",
        options: [
            "Security group configuration",
            "Physical servers",
            "Client-side data",
            "Edge location infrastructure",
            "Availability Zone security"
        ],
        correct: [0, 2]
    },
    {
        question: "Which AWS Identity and Access Management (IAM) resource explicitly grants or denies permissions to a user or group of users?",
        options: [
            "IAM roles",
            "IAM users",
            "IAM groups",
            "IAM policies"
        ],
        correct: [3]
    },
    {
        question: "What is the correct term for the process of verifying a user's identity as a developer?",
        options: [
            "Endorsement",
            "Authentication",
            "Confirmation",
            "Authorization"
        ],
        correct: [1]
    },
    {
        question: "Which statements about IAM user authentication are true? (Select TWO.)",
        options: [
            "AWS credentials to authenticate with any supported services must be provided.",
            "A user name and password to authenticate to the console must be provided.",
            "A pem or .ppk file is used to authenticate programmatically to the AWS application programming interface (API).",
            "It is a best practice to use the account root user credentials to authenticate programmatically by using the AWS Command Line Interface (AWS CLI).",
            "Each AWS account can have only one administrator who manages other IAM users."
        ],
        correct: [0, 1]
    },
    {
        question: "Which suggestion is an Amazon Web Services (AWS) recommendation for securing AWS credentials for applications that run on Amazon Elastic Compute Cloud (Amazon EC2) instances?",
        options: [
            "Embed AWS credentials in the software development kit (SDK) client code.",
            "Store credentials in local AWS configuration files.",
            "Create an AWS Identity and Access Management (IAM) role and attach it to the EC2 instance.",
            "Create an AWS Identity and Access Management (IAM) user and attach it to the EC2 instance."
        ],
        correct: [2]
    },
    {
        question: "What is the format of AWS Identity and Access Management (IAM) policies that define the allowable API calls an entity can invoke?",
        options: [
            "YAML Ain't Markup Language (YAML)",
            "Security Assertion Markup Language (SAML)",
            "Comma-separated values (CSV)",
            "JavaScript Object Notation (JSON)"
        ],
        correct: [3]
    },
    {
        question: "An administrator created an AWS Identity and Access Management (IAM) group called managers within an AWS account. A policy is attached to the managers group. It allows managers to read from and write to an Amazon Simple Storage Service (Amazon S3) bucket in the same AWS account. What is this type of policy?",
        options: [
            "Identity-based",
            "Resource-based",
            "Cross-account access",
            "AdministratorAccess managed"
        ],
        correct: [0]
    },
    {
        question: "Which statement reflects best practices when granting permissions to users, groups, roles, and resources?",
        options: [
            "Create policies that allow broad access and then limit permissions as needed, based on usage.",
            "Use the account root user for routine tasks that the administrator performs.",
            "Create policies that follow the principle of least privilege.",
            "Do not set policies for individual resources."
        ],
        correct: [2]
    },
    {
        question: "What is the effect of the policy statement with Effect: Deny and NotResource specifying specific DynamoDB and S3 ARNs?",
        options: [
            "Denies actions on DynamoDB or Amazon S3 resources except for the resources that are listed in the NotResource element",
            "Denies the ability to write to the pollynotes DynamoDB table",
            "Denies the ability to read from the polly-notes-web S3 bucket",
            "Denies actions on the DynamoDB table or S3 buckets that are listed in the NotResources element"
        ],
        correct: [0]
    },
    {
        question: "Which statements are true about evaluation logic for AWS Identity and Access Management (IAM) policies? (Select TWO.)",
        options: [
            "You cannot have deny and allow statements in the same policy.",
            "An explicit allow overrides an explicit deny.",
            "An explicit deny overrides an explicit allow.",
            "By default, all requests are denied.",
            "By default, all requests are allowed."
        ],
        correct: [2, 3]
    },

    // ---------------- Module 5 ----------------
    {
        question: "Which statement best describes Amazon DynamoDB?",
        options: [
            "An in-memory data store that can boost the performance of databases",
            "A graph database engine that is optimized for storing billions of relationships",
            "A relational database that is built for the cloud and is compatible with MySQL and PostgreSQL",
            "A key-value and document database that scales horizontally and works well for internet-scale applications"
        ],
        correct: [3]
    },
    {
        question: "Which component is part of an Amazon DynamoDB table?",
        options: [
            "Predefined schema",
            "SQL-based queries",
            "Attributes",
            "Columns"
        ],
        correct: [2]
    },
    {
        question: "An Amazon DynamoDB table called SensorReadings captures sensor readings. These readings include a sensor ID attribute that acts as the partition key, and a timestamp attribute that is the sort key. Which statement is true?",
        options: [
            "The sensor ID together with the timestamp represent a simple primary key.",
            "It is impossible for two items in the SensorReadings table to have the same partition key.",
            "It is impossible for two items in the SensorReadings table to have the same sort key.",
            "It is impossible for two items in the Sensor Readings table to have the same primary key."
        ],
        correct: [3]
    },
    {
        question: "Which statement about Amazon DynamoDB partitions is true?",
        options: [
            "DynamoDB stores data in partitions and chooses the partition based on the range attribute.",
            "If a table has a simple primary key (partition key only), DynamoDB stores and retrieves each item based on its hash attribute.",
            "If a table has a composite primary key, DynamoDB will sort the items based on the sort key before selecting the partition for the item.",
            "A developer writes a hash function to tell DynamoDB how to partition the items."
        ],
        correct: [1]
    },
    {
        question: "Suppose that a developer has a restaurants database table that can be queried by name (the partition key), or by name and location (the sort key). What should the developer do if they also want to query by type of cuisine and average customer rating?",
        options: [
            "Set up a local secondary index on cuisine and customer rating.",
            "Set up a global secondary index on cuisine and customer rating.",
            "Change the primary key on the restaurant table to be a complex primary key based on cuisine and customer rating.",
            "Perform a query that uses the cuisine and average customer rating attributes."
        ],
        correct: [1]
    },
    {
        question: "A video game developer who uses Amazon DynamoDB wants to ensure that players' profiles are updated correctly when they make in-game purchases. This process requires multiple updates as part of a single user action. What is the best choice to write this developer's application to manage these complex, all-or-nothing changes?",
        options: [
            "Add an Amazon DynamoDB Accelerator (DAX) cluster.",
            "Implement global tables.",
            "Create application code to check that all parts of the transaction were written successfully, and then roll back the update if any part failed.",
            "Use DynamoDB transactions."
        ],
        correct: [3]
    },
    {
        question: "Which scenarios are example use cases for Amazon DynamoDB Streams? (Select TWO.)",
        options: [
            "An application that requires the fastest possible response time for reads to support real-time bidding",
            "An application that requires repeated reads against a large set of regional weather data to perform a long-running analysis",
            "An application that automatically sends notifications to the mobile devices of all friends in a group when one friend uploads a new picture",
            "An application that must monitor changes to a DynamoDB table and take action on specific changes when a value reaches a certain threshold",
            "An application that requires an in-memory data store"
        ],
        correct: [2, 3]
    },
    {
        question: "Which statement about global tables is true?",
        options: [
            "Global tables provide a managed solution for replicating tables within a single AWS Region.",
            "Global tables use Amazon Simple Storage Service (Amazon S3) to propagate changes between replicas.",
            "When a global table is created, Amazon DynamoDB performs all necessary tasks to create identical tables and propagate ongoing data changes to specified Regions.",
            "With a global table, Amazon DynamoDB supports partial replication of some of the items in a table."
        ],
        correct: [2]
    },
    {
        question: "How far back in days can an Amazon DynamoDB table be restored by using point-in-time recovery?",
        options: [
            "The last week",
            "The last 10 days",
            "The last 35 days",
            "The last calendar month"
        ],
        correct: [2]
    },
    {
        question: "Which statement describes Amazon DynamoDB application programming interface (API) control operations that can be invoked by an application?",
        options: [
            "Create and manage DynamoDB tables.",
            "Create, read, update, and delete data in a table.",
            "Get and write batches of items in a DynamoDB table.",
            "Make coordinated, all-or-nothing changes to multiple items both within and across tables."
        ],
        correct: [0]
    },

    // ---------------- Module 6 ----------------
    {
        question: "Which phrase best describes a RESTful API?",
        options: [
            "An API that uses HTTP to communicate between client and server",
            "A proxy that exists between client and server to handle common problems that occur with API-driven applications",
            "An API that follows the principles of the Representational State Transfer style",
            "An API that resides on the web server"
        ],
        correct: [2]
    },
    {
        question: "Which option suggests the use of WebSocket APIs?",
        options: [
            "An order processing application returns an order number to each customer when they submit an order.",
            "A batch process bundles orders and sends them to a fulfillment center application.",
            "A real-time chat application lets customers talk to customer support about their orders.",
            "A reporting application gives the sales team access to static daily reports from their phones."
        ],
        correct: [2]
    },
    {
        question: "Which use case suggests using Amazon API Gateway HTTP APIS?",
        options: [
            "An application needs an API proxy in front of an AWS Lambda function.",
            "An application must transform a response from an AWS Lambda function before returning the response to the client.",
            "A developer wants to use mock endpoints to test their API.",
            "A developer wants to assign different API quotas by client."
        ],
        correct: [0]
    },
    {
        question: "Which statement about Amazon API Gateway integrations is true?",
        options: [
            "A first-class integration connects an API Gateway HTTP API route to an external third-party service API.",
            "A developer can use HTTP proxy integrations to direct a route to a resource on the internet.",
            "API Gateway cannot access resources within a virtual private cloud (VPC).",
            "An API integration request encapsulates an HTTP request that the backend receives and is always different from the method request that the client submits."
        ],
        correct: [1]
    },
    {
        question: "An application that uses Amazon API Gateway must capture contact information from a third-party client application. The client application sends given name, surname, business phone, and cell phone. The backend application database has only two fields: name and mobile phone. Which option requires the fewest application changes?",
        options: [
            "Export the API definition and use it to update the client.",
            "Use a mapping template to transform the request before it is sent to the database.",
            "Create a usage plan that describes the fields and applies only to this client.",
            "Use a first-class integration to connect the client to the database."
        ],
        correct: [1]
    },
    {
        question: "Which elements are part of the base URI that AWS generates for an Amazon API Gateway API?",
        options: [
            "Region and stage name",
            "API identifier and version",
            "Account ID and stage name",
            "Region and version"
        ],
        correct: [0]
    },
    {
        question: "Given this snippet: `aws apigatewayv2 create-route --api-id 03z501670a --<?> --target arn:aws:lambda:us-east-2:AcctID:function:readFn`. Which option could replace the <?> to create an API route that returns an individual product value from an online catalog?",
        options: [
            "route-key 'GET/products/{product_id}'",
            "route-key 'PUT/products'",
            "route-selection-expression $GET/product",
            "route-selection-expression 'PUT/products/{proxy+}'"
        ],
        correct: [0]
    },
    {
        question: "Which statement about Amazon API Gateway stages is true?",
        options: [
            "Stage names are sequentially assigned based on the API version.",
            "Any stage on any API type can be set to autodeploy.",
            "Developers can use stage variables to connect different stages to different backends.",
            "Developers should avoid creating different stages for each development environment."
        ],
        correct: [2]
    },
    {
        question: "A security team wants to know how to protect APIs in their internet application from common web exploits, like SQL injection or cross-site scripting. Which solution most directly addresses their specific concern?",
        options: [
            "Set throttling limits on their API methods in Amazon API Gateway.",
            "Set all of their APIs to use private endpoints.",
            "Configure a JSON Web Token (JWT)-based authorizer for Amazon API Gateway.",
            "Use AWS WAF with Amazon API Gateway."
        ],
        correct: [3]
    },
    {
        question: "What does the Amazon API Gateway integration Latency metric tell the user?",
        options: [
            "Frequency of server-side errors that affect latency",
            "Speed of the API response back to the client",
            "Responsiveness of the backend",
            "How often requests are throttled"
        ],
        correct: [2]
    },

    // ---------------- Module 7 ----------------
    {
        question: "Which statement describes a characteristic of AWS Lambda?",
        options: [
            "Lambda runs code only when it is activated by an event and uses only the compute resources that are needed.",
            "A developer's methods and configuration options for ensuring high availability with Lambda are similar to their approach with Amazon Elastic Compute Cloud (Amazon EC2).",
            "Lambda functions run in on-demand, temporary environments, and the developer controls when new environments are created or shut down.",
            "A developer must write Lambda functions that use one of the runtimes that the Lambda service provides."
        ],
        correct: [0]
    },
    {
        question: "Which constraint cannot be modified?",
        options: [
            "Function timeout",
            "Reserved concurrency",
            "Burst quota",
            "Regional quota"
        ],
        correct: [2]
    },
    {
        question: "Which option describes how Amazon API Gateway invokes AWS Lambda?",
        options: [
            "API Gateway directly invokes a function with a synchronous invocation.",
            "Lambda processes API Gateway requests asynchronously and retries each request up to two times.",
            "Lambda uses an event source mapping and polls API Gateway for requests",
            "API Gateway directly invokes a function and retries the request until it succeeds or expires."
        ],
        correct: [0]
    },
    {
        question: "Which actions require permissions that are defined in the AWS Lambda execution role? (Select TWO.)",
        options: [
            "A Lambda function writes to an Amazon DynamoDB table.",
            "An object that is written to an Amazon Simple Storage Service (Amazon S3) bucket initiates invocation of a Lambda function.",
            "Lambda polls an Amazon Simple Queue Service (Amazon SQS) queue for messages that initiate invocation of a Lambda function.",
            "An Amazon API Gateway GET route initiates invocation of a Lambda function.",
            "A message that is posted to an Amazon Simple Notification Service (Amazon SNS) topic initiates invocation of a Lambda function."
        ],
        correct: [0, 2]
    },
    {
        question: "Which statement about the function handler in an AWS Lambda function is true?",
        options: [
            "The function handler is the entry point that Lambda calls to start running the Lambda function.",
            "The function handler method might take an event object or a context object.",
            "The event object provides information about the event that invoked the Lambda function. It must be a predefined object that an AWS service generates.",
            "The context object provides runtime information, and the developer must create a context object that matches the runtime that was selected for the function."
        ],
        correct: [0, 2]
    },
    {
        question: "Which issue might be addressed by adding provisioned concurrency to an AWS Lambda function?",
        options: [
            "Another Lambda function runs in the same account and Region. It sometimes spikes and consumes all available concurrency, causing the function to fail.",
            "An application that uses the Lambda function responds slowly for the first few users who sign in each day. Lambda metrics show higher latency for those initial requests.",
            "A legacy backend system fails intermittently when the developer connects to it. To avoid extra costs, they want to reduce the function's wait time when the backend fails.",
            "The developer wants more visibility into transactions that use the Lambda function to identify bottlenecks."
        ],
        correct: [1]
    },
    {
        question: "Which AWS Lambda configuration setting might a developer use to manage function errors when configuring an Amazon Simple Notification Service (Amazon SNS) topic as the event source for a Lambda function? (Select TWO.)",
        options: [
            "State machines",
            "File systems",
            "Destinations",
            "Virtual private cloud",
            "Asynchronous invocations"
        ],
        correct: [2, 4]
    },
    {
        question: "A zipped deployment package including code and custom libraries is 75 MB in size. Which AWS Lambda deployment option should be used?",
        options: [
            "Copy the code into the Lambda console editor to create and deploy the function.",
            "Upload a zip file from an integrated development environment (IDE) to load the deployment package directly into the Lambda console.",
            "Upload the deployment package to an Amazon Simple Storage Service (Amazon S3) bucket, and specify the bucket name and object key on the Lambda console.",
            "Upload the deployment package to an Amazon Elastic Block Store (Amazon EBS) volume, and use the File Systems configuration to reference it."
        ],
        correct: [2]
    },
    {
        question: "A function's Amazon Resource Name (ARN) is as follows: arn:aws:lambda:aws-region:acct-id:function:helloworld:PROD Which statement about this function is correct, based on its ARN?",
        options: [
            "This ARN will invoke the immutable PROD version of the function.",
            "This ARN will invoke the version of the function that is currently associated with the PROD alias.",
            "This ARN will invoke the function and include the AWS Lambda layer that is named PROD.",
            "This ARN will deploy the helloworld function into the PROD account."
        ],
        correct: [1]
    },
    {
        question: "Users of a serverless application have reported errors that occur when they try to retrieve order information. Assuming that AWS X-Ray is enabled, what is the first step the developer might take in X-Ray to start troubleshooting the reported issues quickly?",
        options: [
            "Drill down into the most recent traces to look for errors.",
            "Search for metadata that is related to the users who are reporting issues.",
            "Add annotations that the developer can use to start grouping and filtering traces.",
            "Use the service map to visually locate errors across the application."
        ],
        correct: [3]
    },

    // ---------------- Module 8 ----------------
    {
        question: "Which option describes a benefit that led the shipping industry and the software industry to use containers?",
        options: [
            "Infrastructure providers can create strong dependencies between their platform and the types of containers that they choose to work with.",
            "The abstraction of details of what's being 'shipped' increases the agility of a system.",
            "Increased visibility into the details of what's being 'shipped' helps each point in the system to provide the right type of support",
            "The ability to use nonstandard types of containers gives producers flexibility."
        ],
        correct: [1]
    },
    {
        question: "Which options are components of a container? (Select TWO.)",
        options: [
            "Host server",
            "Runtime engine",
            "Operating system",
            "Application code",
            "Virtual machine"
        ],
        correct: [1, 3]
    },
    {
        question: "Which statement about Docker containers is true?",
        options: [
            "A container is a runnable instance of an image.",
            "A container registry is a template to launch containers.",
            "A container image is a writeable template.",
            "A container layer is a thin read-only layer that is associated with a running container."
        ],
        correct: [0]
    },
    {
        question: "Which Docker CLI command creates a container named my_app_1 from the image named node_app?",
        options: [
            "docker run --name my_app_1 node_app",
            "docker build-tag my_app_1",
            "docker exec -it my app_1 sh",
            "docker images my app 1 from node app"
        ],
        correct: [0]
    },
    {
        question: "Which statement about a Dockerfile is true?",
        options: [
            "A Dockerfile is a YAML file that provides instructions to create a container image.",
            "Each instruction in a Dockerfile creates a read-only layer in the image.",
            "If a developer changes the Dockerfile and rebuilds the image, all layers of the image must be rebuilt.",
            "Developers cannot use the Dockerfile to run scripts that would run after the container is instantiated."
        ],
        correct: [1]
    },
    {
        question: "A developer wants to migrate a monolithic shopping website to a microservice-based application. Which option reflects a reason to choose containers?",
        options: [
            "Each container can use the language and technology that are best suited for the service.",
            "Containerized components are not isolated, so the application will evolve as a singular system.",
            "Containers are well-suited to designs that avoid the use of temporary resources.",
            "Containers separate your dependencies and libraries into their own objects."
        ],
        correct: [0]
    },
    {
        question: "A developer recently built a proof-of-concept application using containers, and the business owner wants to roll it out to production. Which option reflects a primary reason that the developer might use a container orchestration service?",
        options: [
            "To schedule container starts and stops and determine where to place containers",
            "To base their containers on third-party images",
            "To remove the requirement to use a container registry",
            "To receive automated recommendations about how to improve their application code to run on containers"
        ],
        correct: [0]
    },
    {
        question: "Which statement about the Amazon Elastic Container Service (Amazon ECS) is true?",
        options: [
            "Amazon ECS is a highly scalable container orchestration service that supports Docker containers.",
            "Amazon ECS requires the use of the Amazon Elastic Container Registry (Amazon ECR) for container images.",
            "Amazon ECS supports launching containers in Amazon EC2 or AWS Lambda.",
            "With Amazon ECS, you can deploy applications to containers even if they have not been architected specifically to run on containers."
        ],
        correct: [0]
    },
    {
        question: "What is the name for a logical collection of AWS Elastic Beanstalk components, which is conceptually similar to a folder?",
        options: [
            "Environment",
            "Platform",
            "Application",
            "Environment tier"
        ],
        correct: [2]
    },
    {
        question: "A developer wants to do canary testing on a new deployment. Which AWS Elastic Beanstalk deployment policy option should the developer use?",
        options: [
            "Immutable",
            "Rolling with batch",
            "Blue/Green",
            "Traffic Splitting"
        ],
        correct: [3]
    },

    // ---------------- Module 9 ----------------
    {
        question: "An architect suggests that the developers implement caching on an existing application to address performance issues. Which option describes factors that the developers should consider when they decide where to add caching?",
        options: [
            "Avoid caching for data queries that are slow and expensive to run.",
            "Review the data and its access patterns. Data that changes rapidly but is infrequently accessed should be cached.",
            "Consider the tolerance for stale data in each context where the data is used.",
            "Add as much caching in as many places as you can as early in development as possible."
        ],
        correct: [2]
    },
    {
        question: "A developer has determined that an in-memory key-value store would improve performance of their application's queries. They want to keep the solution as simple as possible and need to support read replicas. Which option should they choose?",
        options: [
            "Amazon ElastiCache for Memcached",
            "Amazon ElastiCache for Redis",
            "Amazon CloudFront Functions",
            "Lambda@Edge"
        ],
        correct: [1]
    },
    {
        question: "Amazon ElastiCache is being added to an application to improve response times and alleviate database pressure. The backend database for the application is an Amazon Relational Database Service (Amazon RDS) database. Which task would be the responsibility of the application developer?",
        options: [
            "Applying software patches to the cache instances",
            "Writing code to check the health of the cluster before writing to the cache",
            "Writing code that looks for the requested data in the cache and, if the data is not found, requests it from the origin",
            "Write code to integrate the cache with the Amazon RDS instances that it will be reading from"
        ],
        correct: [2]
    },
    {
        question: "Which statement about Amazon ElastiCache is true?",
        options: [
            "A node is a variable-size chunk of secure, network-attached RAM.",
            "Your application connects to an ElastiCache node by using a unique address called an endpoint.",
            "With the Memcached engine, data is partitioned across shards in a cluster.",
            "Every node within a cluster must run the same cache engine, but the nodes can run on different instance types."
        ],
        correct: [1]
    },
    {
        question: "A developer has been asked to address complaints from customers in the London area about the performance of a web-based application that is hosted in New York. Which option might the developer implement?",
        options: [
            "Use Amazon CloudFront to replicate the application code on Amazon Elastic Compute Cloud (Amazon EC2) instances in the London Region.",
            "Set up a CloudFront distribution that can serve static content from edge locations that are closer to UK users.",
            "Set up a CloudFront regional edge location in the London Region.",
            "Set up one CloudFront edge location in New York and one in London."
        ],
        correct: [1]
    },
    {
        question: "A developer has been asked to increase the cache hit ratio for their Amazon CloudFront distribution. Which option should they try?",
        options: [
            "Include only the minimum necessary values in the cache key.",
            "Decrease the maximum time to live (TTL) setting in a cache policy.",
            "Decrease the max-age setting in a file's Cache-Control header.",
            "Increase the cache hit setting in a cache policy."
        ],
        correct: [0]
    },
    {
        question: "Which statement about Amazon CloudFront cached file expiration is true?",
        options: [
            "Each file in the cache automatically expires after 24 hours, and you cannot modify this setting.",
            "After a file expires, the next time the edge location gets a user request for the file, CloudFront forwards the request to the origin server.",
            "When the origin receives a request, the origin sends the latest version of the file regardless of whether it is the same as the expired version in the cache.",
            "You can control cache file duration with CloudFront cache policy settings or through Cache-Control settings in the origin file headers. However, you cannot combine these options."
        ],
        correct: [1]
    },
    {
        question: "Which use case suggests the use of Amazon CloudFront Functions?",
        options: [
            "A function that redirects the viewer to a different URL and adds a custom response header",
            "A function that uses a third-party library",
            "A function that requires network access to use external services for processing",
            "A function that requires access to the body of HTTP requests"
        ],
        correct: [0]
    },
    {
        question: "Which statement reflects a benefit of lazy loading as a caching strategy?",
        options: [
            "Lazy loading avoids filling up the cache with data that is not requested.",
            "With lazy loading, data in the cache never becomes stale.",
            "With lazy loading, every write involves two trips-a write to the cache and a write to the database-which adds latency to the process.",
            "Lazy loading might result in cache chum. The cache might be updated often if certain records are updated repeatedly."
        ],
        correct: [0]
    },
    {
        question: "A developer has been asked whether caching might improve the performance of their online bidding application. How should they answer this question?",
        options: [
            "Caching probably will not yield much performance improvement for this type of application.",
            "Caching might improve performance by reducing the number of hits to the backend database. However, caching cannot improve performance issues that occur between the client and the web server.",
            "Using different types of caching at each application layer might improve both the frontend and backend performance.",
            "Caching might greatly improve performance if the application is compute heavy, but if the application is read heavy, a cache will not provide much benefit"
        ],
        correct: [2]
    },

    // ---------------- Module 10 ----------------
    {
        question: "Which option describes how a message queue processes messages?",
        options: [
            "The queue polls producers for new messages.",
            "Consumers poll the queue for messages.",
            "The queue broadcasts messages to consumers.",
            "Consumers notify the queue when a message has been successfully processed. The queue configuration determines whether the message should be available to other consumers."
        ],
        correct: [1]
    },
    {
        question: "Which option describes how publish/subscribe (pub/sub) messaging works?",
        options: [
            "Producers send messages to subscribers.",
            "Subscribers poll topics for new messages.",
            "When a topic receives a new message, the topic sends the message to the first subscriber who responds to a notification.",
            "A new topic message is pushed out to all topic subscribers."
        ],
        correct: [3]
    },
    {
        question: "A developer wants to add an Amazon Simple Queue Service (Amazon SQS) queue to decouple incoming order requests from a backend database. Which Amazon SQS operations might be part of this update? (Select TWO)",
        options: [
            "Use the SendMessage operation with the QueueURL mapped to the database endpoint to put messages on the queue.",
            "Use the ReceiveMessage operation with MaxNumberOfMessages set to 5 to retrieve up to 5 messages off the queue at one time.",
            "Use the DeleteMessage operation to change the visibility of the message as soon as the ReceiptHandle is received.",
            "Use the ReceiveMessage operation with the Wait TimeSeconds parameter set to reduce the number of empty requests."
        ],
        correct: [0, 3]
    },
    {
        question: "A tester reports that Amazon Simple Queue Service (Amazon SQS) messages are being processed more than once. The developer finds that processing servers are not completing as quickly as expected, and messages are made available to other consumers before the prior consumer deletes them. Which option might reduce occurrences of this issue?",
        options: [
            "Increase the visibility timeout.",
            "Increase maxReceiveCount.",
            "Increase MaxNumber Of Messages.",
            "Increase the number of producers on the queue."
        ],
        correct: [0]
    },
    {
        question: "For an order-processing application that uses an Amazon Simple Queue Service (Amazon SQS) queue, a developer finds that an older version of the client generate order records that fail the backend process. The failures cause a bottleneck on the queue. How might the developer reduce the impact of the failed records?",
        options: [
            "Increase the visibility timeout and set a high value for MaxNumber Of Messages.",
            "Add a dead-letter queue and set a low maxReceiveCount.",
            "Use long polling and set a high wait time.",
            "Change the queue type from standard to First-In-First-Out (FIFO) and set a high throughput rate."
        ],
        correct: [1]
    },
    {
        question: "Which statement about Amazon Simple Queue Service (Amazon SQS) polling options is true?",
        options: [
            "By default, when you make a ReceiveMessage API call, Amazon SQS performs long polling.",
            "When long polling is configured, WaitTimeSeconds is set to 0.",
            "When short polling is configured, Amazon SQS queries all of its servers.",
            "When short polling is configured, Amazon SQS samples a subset of its servers."
        ],
        correct: [3]
    },
    {
        question: "Which statement about Amazon Simple Notification Service (Amazon SNS) is true?",
        options: [
            "An SNS topic is a logical access point, which acts as a communication channel.",
            "A publisher can only send messages to topics that they have created.",
            "By default, different subscribers to a topic receive different messages.",
            "Amazon SNS defines a single delivery policy, which is applied to all delivery protocols."
        ],
        correct: [0]
    },
    {
        question: "An Amazon Simple Notification Service (Amazon SNS) topic receives messages about orders. An AWS Lambda function that processes canceled orders is subscribed to the topic. How might the developer reduce costs by only invoking the Lambda function for canceled orders?",
        options: [
            "Put an Amazon Simple Queue Service (Amazon SQS) queue in front of the Lambda function.",
            "Separate the new order and cancel order messages to be sent by two different publishers.",
            "Set up a filter policy so that the Lambda function subscription only receives cancel order messages.",
            "Use the ConfirmSubscription operation to limit which messages the Lambda function receives."
        ],
        correct: [2]
    },
    {
        question: "A developer needs to build a custom application to put customer application log records onto an Amazon Kinesis data stream. What should they use to build the application?",
        options: [
            "Use the Kinesis API.",
            "Use the Kinesis Producer Library (KPL).",
            "Use the Kinesis Client Library (KCL).",
            "Use Amazon Managed Service for Apache Flink."
        ],
        correct: [1]
    },
    {
        question: "Which statement about Amazon Kinesis Data Streams is true?",
        options: [
            "When a record is added to the stream, the record is available until a consumer deletes it.",
            "The data records in a data stream are distributed into shards.",
            "A standard data stream can have one consumer. With the enhanced fanout option, you can add multiple consumers.",
            "A stream consumer must delete the records that it processes successfully."
        ],
        correct: [1]
    },

    // ---------------- Module 11 ----------------
    {
        question: "Which scenario suggests the need for a task coordination service such as AWS Step Functions?",
        options: [
            "A website that serves static content is expanding its reach to a global audience.",
            "A serverless application must run a series of AWS Lambda functions that are dependent on each other.",
            "A monolithic application that is written in Java is updating its technology stack.",
            "A reporting application must update its calculation logic to provide more analytical data to business users."
        ],
        correct: [1]
    },
    {
        question: "Which statement describes a benefit of using AWS Step Functions for an application?",
        options: [
            "Step Functions integrates with state machines so that developers can transition between their Step Functions workflow and their state machine workflow.",
            "Step Functions can be configured with Amazon EC2 Auto Scaling to scale up and down.",
            "Step Functions can be defined by using either Python or Node.js.",
            "Developers can use Step Functions to build visual workflows."
        ],
        correct: [3]
    },
    {
        question: "What is the role of the Task state type in AWS Step Functions?",
        options: [
            "Task states are used to stop a failed workflow.",
            "Task states perform a unit of work.",
            "Task states provide branching logic.",
            "Task states tell the state machine the order to perform the steps in."
        ],
        correct: [1]
    },
    {
        question: "An application that processes order returns must complete different steps depending on whether the return is within 30 days of purchase. Which AWS Step Functions state could a developer use to implement this logic?",
        options: [
            "Parallel",
            "Task",
            "Choice",
            "Wait"
        ],
        correct: [2]
    },
    {
        question: "An application that processes order returns must run the same AWS Lambda function for each item in an order. Which AWS Step Functions state could a developer use to implement this logic?",
        options: [
            "Parallel",
            "Pass",
            "Map",
            "Task"
        ],
        correct: [2]
    },
    {
        question: "Which statement is true for both Succeed states and Fail states?",
        options: [
            "Succeed states and Fail states do not include the Next field.",
            "The End field is not required because Succeed states and Fail states are not terminal states.",
            "The Type field is optional for Succeed states and Fail states.",
            "The End field is required because Succeed states and Fail states are terminal states."
        ],
        correct: [0]
    },
    {
        question: "An application that processes order returns must run two independent audit checks. When both checks are successfully completed, the return authorization step is run. Which AWS Step Functions state could a developer use to implement this logic?",
        options: [
            "Parallel",
            "Task",
            "Choice",
            "Wait"
        ],
        correct: [0]
    },
    {
        question: "How is a task Token used in an AWS Step Functions use case that includes a manual approval step?",
        options: [
            "A task Token is generated when the workflow hits a Wait state. The task Token tracks how long the workflow has been waiting for a task to finish.",
            "A task Token is used to transition between each state in the workflow and is defined in the Next field.",
            "A task Token is returned as part of a call to the GetActivity Task action and is used when calling the SendTaskSuccess action to associate a result with a task.",
            "A task Token is an output of the Success state in a synchronous Step Functions Express workflow."
        ],
        correct: [2]
    },
    {
        question: "Which use case is a good fit for AWS Step Functions Express workflows?",
        options: [
            "All workflows in the application must be auditable up to 90 days after a completed run.",
            "The workflow requires a step that will run an application that is hosted on an Amazon Elastic Compute Cloud (Amazon EC2) instance.",
            "The workflow takes between 30 minutes and 1 hour to run.",
            "The workflow must support a very high rate of events that come from Internet of Things (IoT) devices."
        ],
        correct: [3]
    },
    {
        question: "Which statement about AWS Step Functions is true?",
        options: [
            "A developer can use Amazon API Gateway to associate their Step Functions APIs wit methods in an API Gateway API",
            "Step Functions has quotas at the account level regarding the number of registered state machines, but no quotas are related to individual Step Functions runs.",
            "Step Functions must be created in the visual editor on the Step Functions console but can be edited with the AWS SDKS.",
            "A developer can use the Describe API action to get a summary of all state machines and the number of times that each has been run."
        ],
        correct: [0]
    },

    // ---------------- Module 12 ----------------
    {
        question: "Which statement about creating secure connections is true?",
        options: [
            "Both Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are standards that AWS developed for secure communications.",
            "SSL uses certificates to establish website identity, but TLS does not.",
            "Both SSL and TLS encrypt network communications between connected resources.",
            "SSL is a newer version of TLS. Both are used to establish the identify of websites."
        ],
        correct: [2]
    },
    {
        question: "Which step in the secure connection process is the responsibility of the certificate authority (CA)?",
        options: [
            "Issue a certificate.",
            "Verify whether the certificate is from a trusted source.",
            "Send an encrypted session key.",
            "Send a certificate and public key to the client."
        ],
        correct: [0]
    },
    {
        question: "Which statement about AWS Certificate Manager (ACM) is true?",
        options: [
            "ACM can provision public certificates, but for private certificates, developers must produce their own certificate and connect it to ACM.",
            "ACM manages certificate renewals for both public and private certificates.",
            "ACM costs are based on the number of active public certificates in an AWS account.",
            "A developer must configure a load balancer to use ACM certificates."
        ],
        correct: [1]
    },
    {
        question: "Which statement reflects a best practice for security credentials?",
        options: [
            "Only share access keys between users in the same AWS account.",
            "Use AWS Identity and Access Management (IAM) roles to retrieve temporary security credentials.",
            "If there are unencrypted access keys, embed them in code that is available only to developers but not accessible to users.",
            "Do not allow programmatic authentication to AWS services."
        ],
        correct: [1]
    },
    {
        question: "What is the primary difference between AWS Security Token Service (AWS STS) authentication by federated users and AWS STS authentication by AWS Identity and Access Management (IAM) users?",
        options: [
            "With federated users, the application calls an identity broker, but this step is skipped with IAM users.",
            "With federated users, the first authentication is made against an IdP. With IAM users, the first authentication is made against IAM.",
            "With federated users, the second authentication is made against an IdP. With IAM users, the second authentication is made against IAM",
            "With federated users, applications use the temporary security credentials and token to make requests to an AWS service. No token is necessary with IAM users."
        ],
        correct: [1]
    },
    {
        question: "A developer has been asked to investigate how website files have been deleted from an Amazon Simple Storage Service (Amazon S3) bucket. Which approach should they take?",
        options: [
            "Use AWS CloudTrail to search for information about delete object events on the S3 bucket.",
            "Use AWS Security Token Service (AWS STS) to block deletions from the S3 bucket.",
            "Use AWS Identity and Access Management (IAM) to search for users who have used their delete permissions on the S3 bucket.",
            "Use the AWS STS GetSessionToken API call to retrieve information about users who deleted files from the S3 bucket."
        ],
        correct: [0]
    },
    {
        question: "A developer has been asked to add a sign-up and sign-in service to their application. Which Amazon Cognito feature should they use?",
        options: [
            "Amazon Cognito identity pool",
            "Amazon Cognito user pool",
            "Amazon Cognito Lambda trigger",
            "Amazon Cognito access token"
        ],
        correct: [1]
    },
    {
        question: "A developer has been asked to reduce the security risk of users who sign in to their application with username and password pairs that they use on other websites. Which Amazon Cognito user pool feature might the developer configure?",
        options: [
            "Identity tokens",
            "Phone and email verification",
            "Adaptive authentication",
            "Compromised credentials check"
        ],
        correct: [3]
    },
    {
        question: "Which statement about Amazon Cognito identity pools is true?",
        options: [
            "With an identity pool, users can obtain temporary, limited-privilege AWS credentials to access other AWS services.",
            "Identity pools replace the need for a third-party identity provider.",
            "When using Amazon Cognito identity pools, a user would not also use Amazon Cognito user pools.",
            "Identity pools provide sign-up and sign-in functionality for mobile apps."
        ],
        correct: [0]
    },
    {
        question: "A developer plans to use Amazon Cognito user pools with Amazon API Gateway. Which step is part of the user pool authentication flow with API Gateway?",
        options: [
            "A mobile app sends a request to API Gateway, and API Gateway gets JSON Web Tokens (JWTs) from the user pool.",
            "A mobile app user authenticates with a user pool, and the user pool returns JWTs to the app.",
            "The user pool validates the tokens against an identity pool.",
            "Amazon Cognito invokes the API after successfully validating the permissions."
        ],
        correct: [1]
    },

    // ---------------- Module 13 ----------------
    {
        question: "Which option describes the philosophy of DevOps?",
        options: [
            "DevOps is about teaching development and operations teams to use the same set of tools to shorten testing and deployment cycles.",
            "DevOps is about removing barriers between development and operations functions to optimize productivity and reliability.",
            "DevOps culture is reflected in the idea of 'Processes over people,' which means that, with strong processes, any team member can perform any task.",
            "DevOps culture is reflected in the idea that tight coupling leads to tighter parity between development, test, and production environments."
        ],
        correct: [1]
    },
    {
        question: "How are DevOps practices reflected in the software development lifecycle for cloud architectures?",
        options: [
            "Every phase of the software development lifecycle is automated.",
            "Developers can use continuous integration to merge code into their local repository and connect to the test environment for authentic test scenarios.",
            "With continuous delivery, developers can deploy code without the need for continuous monitoring.",
            "Infrastructure tools compare local development environments to test environments and staging environments, and report on environmental differences so that the operations team can ensure parity."
        ],
        correct: [0]
    },
    {
        question: "How might a developer use AWS CodePipeline in their continuous integration and continuous deployment (CI/CD) process?",
        options: [
            "Compile source code, run tests, and produce software packages that are ready to deploy.",
            "Host Git-based repositories and provide source control.",
            "Deploy to a variety of compute services.",
            "Automate the steps that are required to release software based on a release model that the developer defines."
        ],
        correct: [3]
    },
    {
        question: "Which statement about continuous integration and continuous delivery/deployment (CI/CD) is true?",
        options: [
            "Continuous deployment reduces the risk of production bugs, but it might increase the time that it takes to deliver new features.",
            "Continuous integration requires teams to write automated tests.",
            "Continuous delivery extends all the way to production deployment without human intervention.",
            "Continuous deployment extends from check-in through production, but some manual intervention occurs after code is checked in and before that code is released to customers."
        ],
        correct: [1]
    },
    {
        question: "A developer wants to use infrastructure as code for their Java-based web application on AWS. Which task might be part of their work?",
        options: [
            "Create an Amazon Elastic Compute Cloud (Amazon EC2) instance by using AWS CodeBuild, and use AWS CodeDeploy to automatically push the application to the EC2 instance.",
            "Create a Java AWS CloudFormation template that defines the application and database layers for the application.",
            "Create an AWS CloudFormation template with a Resources section that defines the AWS resources for the application.",
            "Use AWS CodePipeline to create a pipeline that automates the complete release of the application."
        ],
        correct: [2]
    },
    {
        question: "A developer wants to use a single AWS CloudFormation template for both the test and production environments. Which section of the template might they use to support this approach?",
        options: [
            "Use the Transform section to define the variables that must be changed for each environment during stack creation or update.",
            "Use the Format Version section to define the parameters to be passed for each environment during stack creation or update.",
            "Use the Outputs section to define each environment that the template should create during stack creation or update.",
            "Use the Conditions section to control whether certain resources are created during stack creation or update."
        ],
        correct: [3]
    },
    {
        question: "Which statement about AWS CloudFormation stacks is true?",
        options: [
            "Deleting a stack deletes its CloudFormation template but does not delete any resources that the most recent deployment created.",
            "A CloudFormation stack is a unit of deployment.",
            "An existing stack must be deleted before deploying an updated template to modify the resource parameters of that stack.",
            "CloudFormation has some quotas that are related to the resources defined in each stack, but no quotas are related to the number of stacks themselves."
        ],
        correct: [1]
    },
    {
        question: "A developer is building their first serverless application on AWS. What must they think about differently with respect to deploying the application?",
        options: [
            "They can't replicate the production environment locally in the same way that they might with a server-based deployment.",
            "They can't use AWS CloudFormation for infrastructure as code to deploy the application.",
            "The steps to connect to the AWS Lambda server for debugging are different than those to connect to a traditional server.",
            "Serverless development tools are not integrated with other AWS development tools that are used in the deployment pipeline."
        ],
        correct: [0]
    },
    {
        question: "How does an AWS Serverless Application Model (AWS SAM) template differ from an AWS CloudFormation template?",
        options: [
            "AWS SAM templates are written in the same language as the AWS Lambda runtime that is used in the functions that are being deployed.",
            "The Globals section is found only in AWS SAM templates.",
            "The Resources section in an AWS SAM template may only contain serverless resources",
            "The Transform declaration is not required for AWS SAM templates."
        ],
        correct: [1]
    },
    {
        question: "The following lines are in the Resources section of an AWS Serverless Application Model (AWS SAM) template. What would these lines create? Resources: Orders: Type: AWS::Serverless::SimpleTable",
        options: [
            "An AWS Lambda function that is named Orders and is connected to an Amazon DynamoDB table",
            "An Amazon DynamoDB table that is called Orders",
            "An API GET method that reads from the Orders table",
            "A MySQL table that is called Orders"
        ],
        correct: [1]
    }
];

let currentQuestionIndex = 0;

const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');

function loadQuestion() {
    resultContainer.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    resultContainer.innerHTML = '';
    
    const currentQuizData = quizData[currentQuestionIndex];
    const isMultiple = currentQuizData.correct.length > 1;
    const inputType = isMultiple ? 'checkbox' : 'radio';
    
    let html = `<div class="question-text">${currentQuestionIndex + 1}. ${currentQuizData.question}</div>`;
    if (isMultiple) {
        html += `<p style="color: #666; font-size: 0.9em;">(เลือกได้มากกว่า 1 ข้อ)</p>`;
    }
    html += `<ul class="options">`;
    
    currentQuizData.options.forEach((option, index) => {
        html += `
            <li>
                <label>
                    <input type="${inputType}" name="answer" value="${index}">
                    <span>${option}</span>
                </label>
            </li>
        `;
    });
    
    html += `</ul>`;
    quizContainer.innerHTML = html;
}

function getSelectedAnswers() {
    const inputs = document.querySelectorAll('input[name="answer"]:checked');
    let values = [];
    inputs.forEach(input => {
        values.push(parseInt(input.value));
    });
    return values;
}

function checkAnswer() {
    const selectedAnswers = getSelectedAnswers();
    const currentQuizData = quizData[currentQuestionIndex];
    
    if (selectedAnswers.length === 0) {
        alert("กรุณาเลือกคำตอบก่อนตรวจครับ!");
        return;
    }

    selectedAnswers.sort();
    const correctAnswers = [...currentQuizData.correct].sort();
    
    const isCorrect = JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers);
    
    resultContainer.classList.remove('hidden');
    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');

    let correctAnswerTexts = currentQuizData.correct.map(idx => currentQuizData.options[idx]).join('<br> - ');
    
    if (isCorrect) {
        resultContainer.className = 'correct-bg';
        resultContainer.innerHTML = `✅ ถูกต้องครับ!<br><br>คำตอบที่ถูกคือ:<br> - ${correctAnswerTexts}`;
    } else {
        resultContainer.className = 'wrong-bg';
        resultContainer.innerHTML = `❌ ผิดครับ!<br><br>คำตอบที่ถูกต้องคือ:<br> - ${correctAnswerTexts}`;
    }

    if (currentQuizData.explanation) {
        resultContainer.innerHTML += `<div class="explanation"><strong>เหตุผล:</strong> ${currentQuizData.explanation}</div>`;
    }
}

submitBtn.addEventListener('click', checkAnswer);

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = `<h2>ทำแบบทดสอบเสร็จสิ้น! 🎉</h2><p>คุณได้ทบทวนข้อสอบไปทั้งหมด ${quizData.length} ข้อ</p>`;
        submitBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
    }
});

// เริ่มต้นระบบ
loadQuestion();
