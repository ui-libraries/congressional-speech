working_dir <- ""
setwd(working_dir)
file_names <- Sys.glob("*.*")
library(jsonlite)

for (file_name in file_names) {
  root_name <- tools::file_path_sans_ext(file_name)
  output_file <- paste(root_name, "json", sep=".")
  load(file_name)
  num_rows <- NROW(my_results)
  write("[", output_file, append=TRUE)
  for(i in 1:num_rows){
    write(toJSON(my_results[[i]], pretty=TRUE), output_file, append=TRUE)
    if (i != num_rows) {
      write(",", output_file, append=TRUE)
    }
  }
  write("]", output_file, append=TRUE)
}