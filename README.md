# Bloomberg Cities API

## Overview
The Bloomberg Cities API is a RESTful service designed to provide data about cities. This API allows users to retrieve information such as city demographics, economic indicators, and other relevant data.


## Installation
To install the Bloomberg Cities API, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/bloomberg-cities-api.git
cd bloomberg-cities-api
npm install
```

## Usage
To start the server, run:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## Endpoints
### Get project/city configuration
```http
GET /config?project=tampa
```

### Get all data for a section
```http
GET /data?project=tampa&select=data.jobs
```

### Get specific data within a section
```http
GET /data?project=tampa&select=data.jobs.msa.tampa.unemployment
```

### Get stored GeoJSON
```http
GET /geo?project=tampa&geoType=Zip+Codes
```

## Contributors
Assemblage Consulting LLC

## License
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.