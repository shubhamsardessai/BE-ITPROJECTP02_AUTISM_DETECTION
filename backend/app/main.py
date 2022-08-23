#!/usr/bin/env python
# coding: utf-8

# In[19]:


import pandas as pd
from fastapi import FastAPI, Request, HTTPException
import uvicorn
import ast
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import AdaBoostClassifier
from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse

from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

# In[20]:

origins = [
    "*",
]

middleware = [
    Middleware(CORSMiddleware, allow_origins=origins)
]

app = FastAPI(middleware=middleware)



class request_body(BaseModel):
    Has_poor_eye_contact: int
    Lacks_social_smile: int
    Remains_aloof: int
    Does_not_reach_ut_to_others: int
    Unable_to_relate_to_people: int
    Unable_to_respond_to_social_or_environmental_ques: int
    Engages_in_solitary_ad_repetitive_play_activities: int
    Unable_to_take_turns_in_social_interaction: int
    Shows_inappropriate_emotional_response: int
    Shows_exaggerated_emotions: int
    Engages_in_self_simulating_emotions: int
    Lacks_fear_of_danger: int
    excited_or_agitated_for_no_apparent_reason: int
    Acquired_speech_and_lost_it: int
    Has_difficulty_in_using_non_verbal_language_or_gestures_to_communicate: int
    Engages_in_stereotype_and_repetitive_use_of_language: int
    Engages_in_echolalic_speech: int
    Produces_infantile_squeals_or_unusual_noises: int
    Unable_to_initiate_or_sustain_conversations_with_others: int
    Uses_jargon_or_meaningless_words: int
    Uses_pronoun_reversals: int
    Unable_to_grasp_pragmatics_of_communications: int
    Engages_in_stereotype_and_repetitive_motor_mannerism: int
    Shows_attachment_to_inanimate_objects: int
    Shows_hyper_activity_or_restlessness: int
    Exhibits_aggressive_behavior: int
    Throws_temper_tantrums: int
    Engages_in_self_injury_behavior: int
    Insist_on_sameness: int
    Unusually_sensitive_to_stimuli: int
    Stares_into_space_for_a_long_period_of_time: int
    Has_difficulty_in_tracking_objects: int
    Has_unusual_vision: int
    Insensitive_to_pain: int
    Responds_to_objects_or_people_usually_by_smelling_touching_or_tasting: int
    Inconsistent_attention_and_concentration: int
    Shows_delay_in_responding: int
    Has_unusual_memory_of_some_kind: int
    Has_savant_ability: int


# In[22]:


# Loading Dataset
# df = pd.read_csv('E://workspace//ML//backend//app//Test_Dataset_1.csv')
df = pd.read_csv('C:\\project1\\ML\\backend\\app\\Test_Dataset_1.csv')


# In[23]:


#Performing Label Encoding
objList = df.select_dtypes(include = "object").columns

from sklearn.preprocessing import LabelEncoder
labelencoder1 = LabelEncoder()

for i in objList:
    df[i] = labelencoder1.fit_transform(df[i])


# In[24]:


# Getting our Features and Targets
x = df[['Has_poor_eye_contact', 'Lacks_social_smile', 'Remains_aloof',
       'Does_not_reach_out_to_others', 'Unable_to_relate_to_people',
       'Unable_to_respond_to_social_or_environmental_ques',
       'Engages_in_solitary_ad_repetitive_play_activities',
       'Unable_to_take_turns_in_social_interaction',
       'Shows_inappropriate_emotional_response', 'Shows_exaggerated_emotions ',
       'Engages_in_self_simulating_emotions', 'Lacks_fear_of_danger',
       'excited_or_agitated_for_no_apparent_reason',
       'Acquired_speech_and_lost_it',
       'Has_difficulty_in_using_non-verbal_language_or_gestures_to_communicate',
       'Engages_in_stereotype_and_repetitive_use_of_language',
       'Engages_in_echolalic_speech',
       'Produces_infantile_squeals_or_unusual_noises ',
       'Unable_to_initiate_or_sustain_conversations_with_others',
       'Uses_jargon_or_meaningless_words', 'Uses_pronoun_reversals',
       'Unable_to_grasp_pragmatics_of_communications ',
       'Engages_in_stereotype_and_repetitive_motor_mannerism ',
       'Shows_attachment_to_inanimate_objects ',
       'Shows_hyper_activity_or_restlessness', 'Exhibits_aggressive_behavior',
       'Throws_temper_tantrums', 'Engages_in_self_injury_behavior ',
       'Insist_on_sameness', 'Unusually_sensitive_to_stimuli ',
       'Stares_into_space_for_a_long_period_of_time',
       'Has_difficulty_in_tracking_objects', 'Has_unusual_vision',
       'Insensitive_to_pain ',
       'Responds_to_objects_or_people_usually_by_smelling,_touching_or_tasting ',
       'Inconsistent_attention_and_concentration', 'Shows_delay_in_responding',
       'Has_unusual_memory_of_some_kind', 'Has_savant_ability']]
y = df["Result"]


# In[25]:


# Creating and Fitting our Model
x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.2, random_state = 0)
clf1 = AdaBoostClassifier(n_estimators = 600).fit(x_train, y_train)


# In[26]:


class Data(BaseModel):
    Has_poor_eye_contact: int
    Lacks_social_smile: int
    Remains_aloof: int
    Does_not_reach_ut_to_others: int
    Unable_to_relate_to_people: int
    Unable_to_respond_to_social_or_environmental_ques: int
    Engages_in_solitary_ad_repetitive_play_activities: int
    Unable_to_take_turns_in_social_interaction: int
    Shows_inappropriate_emotional_response: int
    Shows_exaggerated_emotions: int
    Engages_in_self_simulating_emotions: int
    Lacks_fear_of_danger: int
    excited_or_agitated_for_no_apparent_reason: int
    Acquired_speech_and_lost_it: int
    Has_difficulty_in_using_non_verbal_language_or_gestures_to_communicate: int
    Engages_in_stereotype_and_repetitive_use_of_language: int
    Engages_in_echolalic_speech: int
    Produces_infantile_squeals_or_unusual_noises: int
    Unable_to_initiate_or_sustain_conversations_with_others: int
    Uses_jargon_or_meaningless_words: int
    Uses_pronoun_reversals: int
    Unable_to_grasp_pragmatics_of_communications: int
    Engages_in_stereotype_and_repetitive_motor_mannerism: int
    Shows_attachment_to_inanimate_objects: int
    Shows_hyper_activity_or_restlessness: int
    Exhibits_aggressive_behavior: int
    Throws_temper_tantrums: int
    Engages_in_self_injury_behavior: int
    Insist_on_sameness: int
    Unusually_sensitive_to_stimuli: int
    Stares_into_space_for_a_long_period_of_time: int
    Has_difficulty_in_tracking_objects: int
    Has_unusual_vision: int
    Insensitive_to_pain: int
    Responds_to_objects_or_people_usually_by_smelling_touching_or_tasting: int
    Inconsistent_attention_and_concentration: int
    Shows_delay_in_responding: int
    Has_unusual_memory_of_some_kind: int
    Has_savant_ability: int


# In[27]:


# Creating an Endpoint to receive the data
# to make prediction on


@app.post('/api/predict')
async def predict2(request: Request):
    response = await request.body()
    result = ast.literal_eval(response.decode('utf-8'))
    f = open('test.txt', 'w')
    for item in result:
        # write each item on a new line
        f.write("%s" % item)
    f.close()
    f1 = open('test.txt', 'r')
    data = f1.read().replace('"', "")
    data = ast.literal_eval(data)
    f1.close()
    # print(data)
    
    test_data = [[data['Has_poor_eye_contact'],
                  data['Lacks_social_smile'],
                  data['Remains_aloof'],
                  data['Does_not_reach_ut_to_others'],
                  data['Unable_to_relate_to_people'],
                  data['Unable_to_respond_to_social_or_environmental_ques'],
                  data['Engages_in_solitary_ad_repetitive_play_activities'],
                  data['Unable_to_take_turns_in_social_interaction'],
                  data['Shows_inappropriate_emotional_response'],
                  data['Shows_exaggerated_emotions'],
                  data['Engages_in_self_simulating_emotions'],
                  data['Lacks_fear_of_danger'],
                  data['excited_or_agitated_for_no_apparent_reason'],
                  data['Acquired_speech_and_lost_it'],
                  data['Has_difficulty_in_using_non_verbal_language_or_gestures_to_communicate'],
                  data['Engages_in_stereotype_and_repetitive_use_of_language'],
                  data['Engages_in_echolalic_speech'],
                  data['Produces_infantile_squeals_or_unusual_noises'],
                  data['Unable_to_initiate_or_sustain_conversations_with_others'],
                  data['Uses_jargon_or_meaningless_words'],
                  data['Uses_pronoun_reversals'],
                  data['Unable_to_grasp_pragmatics_of_communications'],
                  data['Engages_in_stereotype_and_repetitive_motor_mannerism'],
                  data['Shows_attachment_to_inanimate_objects'],
                  data['Shows_hyper_activity_or_restlessness'],
                  data['Exhibits_aggressive_behavior'],
                  data['Throws_temper_tantrums'],
                  data['Engages_in_self_injury_behavior'],
                  data['Insist_on_sameness'],
                  data['Unusually_sensitive_to_stimuli'],
                  data['Stares_into_space_for_a_long_period_of_time'],
                  data['Has_difficulty_in_tracking_objects'],
                  data['Has_unusual_vision'],
                  data['Insensitive_to_pain'],
                  data['Responds_to_objects_or_people_usually_by_smelling_touching_or_tasting'],
                  data['Inconsistent_attention_and_concentration'],
                  data['Shows_delay_in_responding'],
                  data['Has_unusual_memory_of_some_kind'],
                  data['Has_savant_ability'],
                ]]
    
     # Predicting the Class
    class_idx = clf1.predict(test_data)[0]
     # Return the Result
    print(str(df.Result[class_idx].tolist()))
    return { 'response' : df.Result[class_idx].tolist()}


# %%
