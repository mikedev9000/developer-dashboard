
# Structure of a "codeReview" in this UI:

```
{
    id: 'my-project/my-repo/1',
    title: 'XYZ-001 toaster frame',
    sourceBranch: 'feature/XYZ-001-toaster-frame',
    targetBranch: 'develop',
    repository: 'my-project/my-repo',
    url: 'https://github.com/my-project/my-repo/pulls/1'
}
```

# Structure of an issue returned by hitting Bitbucket's `/rest/api/1.0//dashboard/pull-requests?state=open&order=OLDEST` (each element inside of respond body's `values` list:

```
{
    "id": 101,
    "version": 1,
    "title": "Talking Nerdy",
    "description": "It’s a kludge, but put the tuple from the database in the cache.",
    "state": "OPEN",
    "open": true,
    "closed": false,
    "createdDate": 1359075920,
    "updatedDate": 1359085920,
    "fromRef": {
        "id": "refs/heads/feature-ABC-123",
        "repository": {
            "slug": "my-repo",
            "name": null,
            "project": {
                "key": "PRJ"
            }
        }
    },
    "toRef": {
        "id": "refs/heads/master",
        "repository": {
            "slug": "my-repo",
            "name": null,
            "project": {
                "key": "PRJ"
            }
        }
    },
    "locked": false,
    "author": {
        "user": {
            "name": "tom",
            "emailAddress": "tom@example.com",
            "id": 115026,
            "displayName": "Tom",
            "active": true,
            "slug": "tom",
            "type": "NORMAL"
        },
        "role": "AUTHOR",
        "approved": true,
        "status": "APPROVED"
    },
    "reviewers": [
        {
            "user": {
                "name": "jcitizen",
                "emailAddress": "jane@example.com",
                "id": 101,
                "displayName": "Jane Citizen",
                "active": true,
                "slug": "jcitizen",
                "type": "NORMAL"
            },
            "lastReviewedCommit": "7549846524f8aed2bd1c0249993ae1bf9d3c9998",
            "role": "REVIEWER",
            "approved": true,
            "status": "APPROVED"
        }
    ],
    "participants": [
        {
            "user": {
                "name": "dick",
                "emailAddress": "dick@example.com",
                "id": 3083181,
                "displayName": "Dick",
                "active": true,
                "slug": "dick",
                "type": "NORMAL"
            },
            "role": "PARTICIPANT",
            "approved": false,
            "status": "UNAPPROVED"
        },
        {
            "user": {
                "name": "harry",
                "emailAddress": "harry@example.com",
                "id": 99049120,
                "displayName": "Harry",
                "active": true,
                "slug": "harry",
                "type": "NORMAL"
            },
            "role": "PARTICIPANT",
            "approved": true,
            "status": "APPROVED"
        }
    ],
    "links": {
        "self": [
            {
                "href": "http://link/to/pullrequest"
            }
        ]
    }
}
```

# Interesting fields:
