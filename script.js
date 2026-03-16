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
