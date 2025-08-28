package db

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"sgl-rights/entities"
	"strings"
)

func AddEvent(e entities.Event) {
	db, _ := sql.Open("sqlite3", "/app/store.db")
	defer db.Close()

	db.Exec(`
		INSERT INTO Events (
    		previewPhoto, nameRu, nameEn, nameKz, descriptionRu, descriptionEn, descriptionKz, manager, developer, placeRu, placeEn, placeKz, discipline, startTime, endTime, prize) VALUES
		(
			$1, 
			$2, 
			$3, 
			$4, 
			$5, 
			$6, 
			$7, 
			$8, 
			$9, 
			$10, 
			$11, 
			$12, 
			$13, 
			$14,
			$15,
			$16
		)
	`, e.PreviewPhoto, e.Name.Ru, e.Name.En, e.Name.Kz, e.Description.Ru, e.Description.En, e.Description.Kz, e.Manager, e.Developer, e.Place.Ru, e.Place.En, e.Place.Kz, e.Discipline, e.StartTime, e.EndTime, e.Prize)
}

func UpdateEvent(e entities.Event) {
	db, _ := sql.Open("sqlite3", "/app/store.db")
	defer db.Close()

	_, i := db.Exec(`
		UPDATE Events
		SET previewPhoto = $1, 
			nameRu = $2, 
			nameEn = $3, 
			nameKz = $4, 
			descriptionRu = $5, 
			descriptionEn = $6, 
			descriptionKz = $7, 
			manager = $8, 
			developer = $9,
			placeRu = $10, 
			placeEn = $11, 
			placeKz = $12, 
			discipline = $13, 
			startTime = $14, 
			endTime = $15, 
			prize = $16 
		WHERE id = $17;
	`, e.PreviewPhoto, e.Name.Ru, e.Name.En, e.Name.Kz, e.Description.Ru, e.Description.En, e.Description.Kz, e.Manager, e.Developer, e.Place.Ru, e.Place.En, e.Place.Kz, e.Discipline, e.StartTime, e.EndTime, e.Prize, e.Id)
	if i != nil {
		fmt.Println(i)
	}
}

func GetAllEvents() []entities.Event {
	db, _ := sql.Open("sqlite3", "/app/store.db")
	defer db.Close()

	rows, _ := db.Query("SELECT * FROM Events")
	defer rows.Close()

	events := []entities.Event{}

	for rows.Next() {
		e := entities.Event{}
		rows.Scan(&e.Id, &e.PreviewPhoto, &e.Name.Ru, &e.Name.En, &e.Name.Kz, &e.Description.Ru, &e.Description.En, &e.Description.Kz, &e.Manager, &e.Developer, &e.Place.Ru, &e.Place.En, &e.Place.Kz, &e.Discipline, &e.StartTime, &e.EndTime, &e.Prize)
		events = append(events, e)
	}

	return events
}

func SearchEvents(query string, disciplines string, managers string, developers string, prizeMin int, prizeMax int, startTime int, endTime int) []entities.Event {
	db, _ := sql.Open("sqlite3", "/app/store.db")
	defer db.Close()

	fmt.Println(disciplines)

	disciplinesFilter := ""
	if disciplines != "" {
		disciplinesFilter = fmt.Sprintf("discipline IN (%s)", disciplines)
	}

	managersFilter := ""
	if managers != "" {
		managersFilter = fmt.Sprintf("manager IN (%s)", managers)
	}

	developersFilter := ""
	if developers != "" {
		developersFilter = fmt.Sprintf("developer IN (%s)", developers)
	}

	prizeMinFilter := ""
	if prizeMin != 0 {
		prizeMinFilter = fmt.Sprintf("prize > %d", prizeMin)
	}

	prizeMaxFilter := ""
	if prizeMax != 0 {
		prizeMaxFilter = fmt.Sprintf("prize < %d", prizeMax)
	}

	startTimeFilter := ""
	if startTime != 0 {
		startTimeFilter = fmt.Sprintf("startTime > %d", startTime)
	}

	endTimeFilter := ""
	if endTime != 0 {
		endTimeFilter = fmt.Sprintf("endTime < %d", endTime)
	}

	queryFilter := ""
	if query != "" {
		queryFilter = fmt.Sprintf("(nameRu LIKE '%%%s%%' OR nameEn LIKE '%%%s%%' OR nameKz LIKE '%%%s%%')", query, query, query)
	}

	allFilters := []string{disciplinesFilter, managersFilter, developersFilter, prizeMinFilter, prizeMaxFilter, startTimeFilter, endTimeFilter, queryFilter}
	var nonEmptyFilters []string
	for _, filter := range allFilters {
		if filter != "" {
			nonEmptyFilters = append(nonEmptyFilters, filter)
		}
	}

	sqlParams := strings.Join(nonEmptyFilters, " AND ")

	where := ""
	if sqlParams != "" {
		where = "WHERE"
	}

	sqlQuery := fmt.Sprintf("SELECT * FROM Events %s %s;", where, sqlParams)

	rows, _ := db.Query(sqlQuery)

	events := []entities.Event{}

	if rows == nil {
		return events
	}
	defer rows.Close()

	for rows.Next() {
		e := entities.Event{}
		rows.Scan(&e.Id, &e.PreviewPhoto, &e.Name.Ru, &e.Name.En, &e.Name.Kz, &e.Description.Ru, &e.Description.En, &e.Description.Kz, &e.Manager, &e.Developer, &e.Place.Ru, &e.Place.En, &e.Place.Kz, &e.Discipline, &e.StartTime, &e.EndTime, &e.Prize)
		events = append(events, e)
	}

	return events
}

func GetEventById(id int) entities.Event {
	db, _ := sql.Open("sqlite3", "/app/store.db")
	defer db.Close()

	row := db.QueryRow("SELECT * FROM Events WHERE id = $1", id)

	event := entities.Event{}
	row.Scan(&event.Id, &event.PreviewPhoto, &event.Name.Ru, &event.Name.En, &event.Name.Kz, &event.Description.Ru, &event.Description.En, &event.Description.Kz, &event.Manager, &event.Developer, &event.Place.Ru, &event.Place.En, &event.Place.Kz, &event.Discipline, &event.StartTime, &event.EndTime, &event.Prize)

	return event
}

func RemoveEvent(id int) {
	db, _ := sql.Open("sqlite3", "/app/store.db")

	defer db.Close()

	db.Exec("DELETE FROM Events WHERE id = $1", id)
}

// func GetFilters() []byte {

// 	db, _ := sql.Open("sqlite3", "/app/store.db")
// 	defer db.Close()

// 	rowsManagers, _ := db.Query("SELECT DISTINCT manager FROM Events")
// 	rowsDisciplines, _ := db.Query("SELECT DISTINCT discipline FROM Events")
// 	rowsDevelopers, _ := db.Query("SELECT DISTINCT developer FROM Events")

// 	managers := []string{}
// 	disciplines := []string{}
// 	developers := []string{}

// 	if rowsManagers != nil {
// 		defer rowsManagers.Close()
// 		for rowsManagers.Next() {
// 			var s string
// 			rowsManagers.Scan(&s)
// 			managers = append(managers, s)
// 		}
// 	}

// 	if rowsDisciplines != nil {
// 		defer rowsDisciplines.Close()
// 		for rowsDisciplines.Next() {
// 			var s string
// 			rowsDisciplines.Scan(&s)
// 			disciplines = append(disciplines, s)
// 		}
// 	}

// 	if rowsDevelopers != nil {
// 		defer rowsDevelopers.Close()
// 		for rowsDevelopers.Next() {
// 			var s string
// 			rowsDevelopers.Scan(&s)
// 			developers = append(developers, s)
// 		}
// 	}

// 	data := map[string][]string{
// 		"managers":    managers,
// 		"disciplines": disciplines,
// 		"developers":  developers,
// 	}

// 	fmt.Println(data)
// 	fmt.Println(rowsManagers)
// 	fmt.Println(rowsDisciplines)

// 	jsonData, _ := json.Marshal(data)

//		return jsonData
//	}
func GetFilters() []byte {
	// Открываем соединение с базой данных
	db, err := sql.Open("sqlite3", "/app/store.db")
	if err != nil {
		log.Printf("ERROR: Failed to open database: %v", err)
		return getEmptyFiltersJson()
	}
	defer func() {
		if closeErr := db.Close(); closeErr != nil {
			log.Printf("WARNING: Failed to close database connection: %v", closeErr)
		}
	}()

	// Проверяем соединение с базой
	if err := db.Ping(); err != nil {
		log.Printf("ERROR: Database connection failed: %v", err)
		return getEmptyFiltersJson()
	}

	// Получаем уникальных менеджеров
	managers, err := getDistinctValues(db, "SELECT DISTINCT manager FROM Events WHERE manager IS NOT NULL AND manager != ''")
	if err != nil {
		log.Printf("ERROR: Failed to get managers: %v", err)
		managers = []string{}
	}

	// Получаем уникальные дисциплины
	disciplines, err := getDistinctValues(db, "SELECT DISTINCT discipline FROM Events WHERE discipline IS NOT NULL AND discipline != ''")
	if err != nil {
		log.Printf("ERROR: Failed to get disciplines: %v", err)
		disciplines = []string{}
	}

	// Получаем уникальных разработчиков
	developers, err := getDistinctValues(db, "SELECT DISTINCT developer FROM Events WHERE developer IS NOT NULL AND developer != ''")
	if err != nil {
		log.Printf("ERROR: Failed to get developers: %v", err)
		developers = []string{}
	}

	// Создаем структуру данных
	data := map[string][]string{
		"managers":    managers,
		"disciplines": disciplines,
		"developers":  developers,
	}

	// Логируем результаты для отладки
	log.Printf("DEBUG: Filters data - managers: %d, disciplines: %d, developers: %d",
		len(managers), len(disciplines), len(developers))

	// Преобразуем в JSON
	jsonData, err := json.Marshal(data)
	if err != nil {
		log.Printf("ERROR: Failed to marshal JSON: %v", err)
		return getEmptyFiltersJson()
	}

	return jsonData
}

// Вспомогательная функция для получения уникальных значений
func getDistinctValues(db *sql.DB, query string) ([]string, error) {
	var values []string

	rows, err := db.Query(query)
	if err != nil {
		return nil, fmt.Errorf("query failed: %v, query: %s", err, query)
	}
	defer func() {
		if closeErr := rows.Close(); closeErr != nil {
			log.Printf("WARNING: Failed to close rows: %v", closeErr)
		}
	}()

	for rows.Next() {
		var value string
		if err := rows.Scan(&value); err != nil {
			log.Printf("WARNING: Failed to scan row: %v", err)
			continue // Пропускаем проблемные строки, но продолжаем обработку
		}
		if value != "" { // Добавляем только непустые значения
			values = append(values, value)
		}
	}

	// Проверяем ошибки итерации
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("row iteration error: %v", err)
	}

	return values, nil
}

// Функция возвращает пустой JSON при ошибках
func getEmptyFiltersJson() []byte {
	emptyData := map[string][]string{
		"managers":    {},
		"disciplines": {},
		"developers":  {},
	}

	jsonData, err := json.Marshal(emptyData)
	if err != nil {
		// В крайнем случае возвращаем жестко закодированный JSON
		return []byte(`{"managers":[],"disciplines":[],"developers":[]}`)
	}

	return jsonData
}

// Дополнительная функция для проверки состояния базы (можно вызвать при инициализации)
func CheckDatabaseState() {
	db, err := sql.Open("sqlite3", "/app/store.db")
	if err != nil {
		log.Printf("DATABASE CHECK: Failed to open database: %v", err)
		return
	}
	defer db.Close()

	// Проверяем существование таблицы
	var tableName string
	err = db.QueryRow("SELECT name FROM sqlite_master WHERE type='table' AND name='Events'").Scan(&tableName)
	if err != nil {
		log.Printf("DATABASE CHECK: Events table does not exist or is empty: %v", err)
		return
	}

	// Проверяем количество записей
	var count int
	err = db.QueryRow("SELECT COUNT(*) FROM Events").Scan(&count)
	if err != nil {
		log.Printf("DATABASE CHECK: Failed to count events: %v", err)
		return
	}

	log.Printf("DATABASE CHECK: Events table exists with %d records", count)
}
