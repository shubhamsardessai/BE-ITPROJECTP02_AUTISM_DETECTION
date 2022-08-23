# 
FROM python:3.9

# 
WORKDIR /code

# set env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 
COPY ./requirements.txt /code/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN pip install pandas
RUN pip install -U scikit-learn
RUN pip install fsspec

# 
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]