SELECT s.theme_style_id
  FROM apex_application_theme_styles s, apex_application_themes t
 WHERE s.application_id = t.application_id and
       s.theme_number = t.theme_number and
       s.application_id = :app_id and
       s.name = 'Dark'


SELECT s.theme_style_id
  FROM apex_application_theme_styles s, apex_application_themes t
 WHERE s.application_id = t.application_id and
       s.theme_number = t.theme_number and
       s.application_id = :app_id and
       s.name = 'Light'